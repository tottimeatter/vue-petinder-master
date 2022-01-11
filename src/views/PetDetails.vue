<template>
  <main class="page-details">
    <section class="pet-attributes">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-5">
            <div class="detail-header">
              <img
                class="pet-image"
                v-bind:src="pet.image_url"
                :alt="pet.name"
              />
            </div>
          </div>
          <div class="col-md-7">
            <h1 class="title">
              {{ pet.name }} <span>{{ age }} años, {{ pet.location }}</span>
            </h1>
            <div class="main-details">
              <ul>
                <li>
                  <strong>Especie</strong> <span>{{ pet.species }}</span>
                </li>
                <li>
                  <strong>Sexo</strong><span>{{ pet.sex }}</span>
                </li>
                <li>
                  <strong>Medida</strong><span>{{ pet.size }}</span>
                </li>
                <li>
                  <strong>Fecha de nacimiento</strong
                  ><span>{{ pet.birth_date }}</span>
                </li>
                <li>
                  <strong>Estado</strong><span>{{ pet.status }}</span>
                </li>
              </ul>
              <div class="pet-buttons">
                <button class="btn btn-primary">Lo quiero adoptar</button>
                <button class="btn btn-light btn-share">Compartir</button>
              </div>
            </div>
          </div>
        </div>
        <div class="pet-history">
          <h2>Mi historia</h2>
          <p>{{ pet.bio }}</p>
        </div>
        <div class="row pet-details-cols">
          <div class="pet-personality col-md-6 col-lg-4 mb-5">
            <h2>Mi personalidad</h2>
            <ul class="d-flex gap-1 flex-wrap">
              <li v-for="item in pet.personality" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 pet-handle">
            <h2>Me entregan</h2>
            <ul>
              <li>
                <strong>Vacunado</strong
                ><span class="yes" v-if="pet.handle_status.vaccinated">Sí</span
                ><span v-else>No</span>
              </li>
              <li>
                <strong>Desparasitado</strong
                ><span class="yes" v-if="pet.handle_status.dewormed">Sí</span
                ><span v-else>No</span>
              </li>
              <li>
                <strong>Esterelizado</strong
                ><span class="yes" v-if="pet.handle_status.sterilized">Sí</span
                ><span v-else>No</span>
              </li>
              <li>
                <strong>Microchip</strong
                ><span class="yes" v-if="pet.handle_status.microchip">Sí</span
                ><span v-else>No</span>
              </li>
            </ul>
          </div>
          <div
            class="col-md-6 col-lg-4 mb-5 pet-notes"
            v-if="pet.info_notes.length > 0"
          >
            <h2>Tienes que saber</h2>
            <ul>
              <li v-for="item in pet.info_notes" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="search-wrapper">
      <div class="container">
        <p>
          Si <strong>{{ pet.name }}</strong> ya ha sido adoptado/a o no hacéis
          match, tenemos otros animales que te necesitan. Encuentralos
        </p>
        <search-bar />
      </div>
    </section>
  </main>
</template>

<script>
import json from "@/json/pets.json";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "PetDetails",
  data() {
    return {
      pets: json.data,
      pet: null,
    };
  },
  components: {
    SearchBar,
  },

  created() {
    this.pet = this.pets.find((pet) => pet.id == this.$route.params.id);
  },
  computed: {
    age() {
      const today = new Date();
      const birthdate = new Date(this.pet.birth_date);
      return Math.floor((today - birthdate) / (1000 * 60 * 60 * 24 * 365.25));
    },
  },
};
</script>
