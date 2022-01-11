<template>
  <router-link :to="{ name: 'pet', params: { id: pet.id } }" class="card">
    <div class="card-header">
      <img class="card-img-top" :src="pet.image_url" :alt="pet.name" />
    </div>
    <div class="card-body">
      <div class="card-main">
        <h3 class="card-title">{{ pet.name }}</h3>
        <p class="card-text">{{ pet.location }}</p>
      </div>
      <ul class="card-icons">
        <li>
          <img
            class="card-icon"
            :src="require('@/assets/icons/' + icon_species)"
            :alt="pet.species"
          />
        </li>
        <li>
          <img
            class="card-icon"
            :src="require('@/assets/icons/' + icon_sex)"
            :alt="pet.sex"
          />
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PetCard",
  props: {
    pet: Object,
  },
  data() {
    return {
      icon_sex: this.pet.sex === "Macho" ? "icon_male.svg" : "icon_female.svg",
      icon_species:
        this.pet.species === "Gato" ? "icon_cat.svg" : "icon_dog.svg",
    };
  },
};
</script>

<style lang="scss"></style>
