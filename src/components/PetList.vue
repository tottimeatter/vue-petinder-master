<template>
  <section class="pet-list">
    <div class="row">
      <div v-for="pet in pets" :key="pet.id" class="col-sm-6 col-md-4 col-lg-3">
        <PetCard :pet="pet" />
      </div>
    </div>
  </section>
</template>

<script>
import PetCard from "./PetCard";

export default {
  components: { PetCard },
  name: "PetList",
  props: { pets: Array },
};
</script>

<style lang="scss"></style>
