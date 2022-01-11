<template>
  <main class="page-details">
    <h1>Resultados de {{ query }}</h1>
    <button class="btn btn-light" v-on:click="toggleAdvancedSearch">
      Búsqueda avanzada {{ advancedSearch ? "↑" : "↓" }}
    </button>
    <div class="advanced-search" v-if="advancedSearch">
      <form>
        <div>
          <label>Especie</label>
          <select v-model="advanced.species">
            <option v-bind:value="'all'">Todos</option>
            <option v-bind:value="'Perro'">Perro</option>
            <option v-bind:value="'Gato'">Gato</option>
          </select>
        </div>
        <div>
          <label>Genero</label>
          <select v-model="advanced.gender">
            <option v-bind:value="'all'">Todos</option>
            <option v-bind:value="'Hembra'">Hembra</option>
            <option v-bind:value="'Macho'">Macho</option>
          </select>
        </div>
        <div>
          <label>Tamaño</label>
          <select v-model="advanced.size">
            <option v-bind:value="'all'">Todos</option>
            <option v-bind:value="'Pequeño'">Pequeño</option>
            <option v-bind:value="'Mediano'">Mediano</option>
            <option v-bind:value="'Grande'">Grande</option>
          </select>
        </div>
      </form>
      <button
        class="btn btn-light"
        type="submit"
        v-on:click="searchAdvanced($event)"
      >
        Aplicar filtros
      </button>
    </div>

    <pet-list v-if="pets.length" :pets="pets" />

    <div v-if="pets.length <= 0">
      <p>
        No se ha encontrado ningún gatete ni perrete que coincida con la
        búsqueda
      </p>
    </div>
  </main>
</template>

<script>
import PetList from "@/components/PetList";
import { getPetsByName, getPetsByAdvancedSearch } from "../db";
export default {
  name: "SearchResults",
  data() {
    return {
      query: "",
      pets: [],
      advancedSearch: false,
      advanced: {
        species: "",
        gender: "",
        size: "",
      },
    };
  },
  components: {
    PetList,
  },
  created() {
    this.query = this.$route.params.q;
    this.search();
  },
  methods: {
    search() {
      getPetsByName(this.query).then((v) => {
        console.log(v);
        this.pets = v;
      });
    },
    toggleAdvancedSearch() {
      this.advancedSearch = !this.advancedSearch;
    },
    searchAdvanced($event) {
      $event.preventDefault();
      console.log(this.advanced);
      getPetsByAdvancedSearch(this.advanced).then((pets) => {
        this.pets = pets;
      });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.page-details {
  margin-left: 5em;
  margin-right: 5em;
}
.advanced-search > form {
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 1em;
    label {
      margin-right: 1em;
    }
    select {
      width: 150px;
    }
  }
}
.btn {
  margin: 1em;
}
</style>
