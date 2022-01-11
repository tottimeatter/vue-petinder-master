<template>
  <div class="content">
    <h1>Nuevo animal</h1>

    <form>
      <legend>Nombre *</legend>
      <input name="name" v-model="newPet.name" placeholder="Nombre" required />
      <legend>Imagen *</legend>
      <div class="img-wrapper">
        <input
          type="file"
          accept="image/*"
          v-on:change="getPhoto"
          name="image_url"
          placeholder="Imagen"
          required
        />
        <img v-if="myFile" id="imgPreview" />
      </div>
      <legend>Localización *</legend>
      <input
        name="location"
        v-model="newPet.location"
        placeholder="Localización"
        required
      />
      <legend>Especie *</legend>
      <select
        name="species"
        v-model="newPet.species"
        placeholder="Especie"
        required
      >
        <option v-bind:value="'gato'">Gato</option>
        <option v-bind:value="'perro'">Perro</option>
      </select>
      <legend>Género *</legend>
      <select name="sex" v-model="newPet.sex" placeholder="Género" required>
        <option v-bind:value="'macho'">Macho</option>
        <option v-bind:value="'hembra'">Hembra</option>
      </select>
      <legend>Tamaño *</legend>
      <select name="size" v-model="newPet.size" placeholder="Tamaño" required>
        <option v-bind:value="'pequeño'">Pequeño</option>
        <option v-bind:value="'mediano'">Mediano</option>
        <option v-bind:value="'grande'">Grande</option>
      </select>
      <legend>Fecha de nacimiento *</legend>
      <input
        type="date"
        name="birth_date"
        v-model="newPet.birth_date"
        placeholder="Fecha de nacimiento"
        required
      />

      <fieldset>
        <legend>Estado de la entrega *</legend>
        <input
          type="checkbox"
          name="handle_status"
          value="vaccinated"
          v-model="newPet.handle_status"
        />Vacunado<br />
        <input
          type="checkbox"
          name="handle_status"
          value="dewormed"
          v-model="newPet.handle_status"
        />Desparasitado<br />
        <input
          type="checkbox"
          name="handle_status"
          value="sterilized"
          v-model="newPet.handle_status"
        />Esterilizado<br />
        <input
          type="checkbox"
          name="handle_status"
          value="microchip"
          v-model="newPet.handle_status"
        />Microchip<br />
      </fieldset>
      <legend>Historia *</legend>
      <textarea
        name="bio"
        v-model="newPet.bio"
        placeholder="Historia"
        required
      ></textarea>
      <legend>Estado *</legend>
      <select
        name="status"
        v-model="newPet.status"
        placeholder="Estado"
        required
      >
        <option v-bind:value="'en adopción'">En adopción</option>
        <option v-bind:value="'adoptado'">Adoptado</option>
        <option v-bind:value="'en acogida'">En acogida</option>
        <option v-bind:value="'acogido'">Acogido</option>
      </select>

      <fieldset>
        <legend>Personalidad</legend>
        <div>
          <input
            type="checkbox"
            name="personality"
            value="Bueno con niños"
            v-model="newPet.personality"
          />Bueno con niños
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Bueno con perros"
            v-model="newPet.personality"
          />Bueno con perros
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Bueno con gatos"
            v-model="newPet.personality"
          />Bueno con gatos
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Bueno en casa"
            v-model="newPet.personality"
          />Bueno en casa
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Bueno en el coche"
            v-model="newPet.personality"
          />Bueno en el coche
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Tímido"
            v-model="newPet.personality"
          />Tímido
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Juguetón"
            v-model="newPet.personality"
          />Juguetón
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Cariñoso"
            v-model="newPet.personality"
          />Cariñoso
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Me gusta estar en compañia"
            v-model="newPet.personality"
          />Me gusta estar en compañía
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Me gusta pasear"
            v-model="newPet.personality"
          />Me gusta pasear
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Independiente"
            v-model="newPet.personality"
          />Independiente
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Cauteloso con extraños"
            v-model="newPet.personality"
          />Cauteloso con extraños
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="Amigable con extraños"
            v-model="newPet.personality"
          />Amigable con extraños
        </div>

        <div>
          <input
            type="checkbox"
            name="personality"
            value="A veces ladro"
            v-model="newPet.personality"
          />A vecesladro
        </div>
      </fieldset>
      <legend>Información adicional</legend>
      <div>
        <input
          name="info_notes"
          v-model="newExtra"
          placeholder="Información adicional"
        />
        <button class="btn btn-success" v-on:click="addExtraInfo">+</button>
      </div>
      <div class="info_notes-cloud">
        <span
          v-for="note in newPet.info_notes"
          :key="note"
          v-on:click="removeExtraInfo(note)"
        >
          {{ note }}
        </span>
      </div>
    </form>

    <span>Los campos marcados con asterisco (*) son obligatorios</span>

    <button class="btn btn-dark" v-on:click="logData">Enviar</button>
  </div>
</template>

<script>
import { addPet } from "../db.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  data: function () {
    return {
      newPet: {
        name: "",
        image_url: "",
        location: "",
        species: "",
        sex: "",
        size: "",
        birth_date: new Date(),
        handle_status: [],
        bio: "",
        status: "",
        personality: [],
        info_notes: [],
      },
      newExtra: "",
      myFile: undefined,
      fileURL: undefined,
      storeRef: "",
    };
  },
  methods: {
    logData: function () {
      for (let key in this.newPet) {
        if (
          !this.newPet[key] &&
          key !== "personality" &&
          key !== "info_notes"
        ) {
          console.log(key);
          alert("Has d'omplir tots els camps requerits!");
          return;
        }
      }
      uploadBytes(this.storeRef, this.myFile).then((snapshot) => {
        console.log(snapshot);
        getDownloadURL(this.storeRef).then((value) => {
          console.log(value);
          this.newPet.image_url = value;
          addPet(this.newPet);
        });
      });
      console.log(this.newPet);
    },
    addExtraInfo: function ($event) {
      $event.preventDefault();
      this.newPet.info_notes.push(this.newExtra);
      console.log(this.newPet);
      this.newExtra = "";
    },
    removeExtraInfo: function ($event) {
      console.log($event);
      this.newPet.info_notes.splice(this.newPet.info_notes.indexOf($event), 1);
    },
    getPhoto: function ($event) {
      this.myFile = $event.target.files[0];
      var fr = new FileReader();
      fr.onload = (data) => {
        document
          .getElementById("imgPreview")
          .setAttribute("src", data.target.result);
      };
      fr.readAsDataURL(this.myFile);

      let fakepath = $event.target.value.split("\\");
      let storagePath = "/imatges/" + fakepath[fakepath.length - 1];
      this.storeRef = ref(getStorage(), storagePath);
      this.newPet.image_url = "pending";
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;

  form {
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    margin-left: 5em;
    input,
    select,
    textarea {
      margin: 1em;
    }
  }
}

.info_notes-cloud {
  display: flex;
  flex-wrap: wrap;

  span {
    margin: 0.5em;
    padding: 0.5em;
    background-color: #eeeeee;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      &::after {
        content: "X";
        color: rgb(226, 110, 110);
        position: relative;
        bottom: 10px;
        left: 3px;
      }
    }
  }
}

.img-wrapper {
  display: flex;
  img {
    max-height: 60px;
  }
}
</style>
