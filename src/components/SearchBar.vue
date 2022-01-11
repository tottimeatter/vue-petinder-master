<template>
  <form class="search-bar">
    <label class="visibility-hidden" for="buscador">Buscar</label>
    <input
      id="buscador"
      type="text"
      placeholder="Busca a tu nuevo mejor amigo"
      class="form-control search-control"
      v-model="query"
    />

    <button
      type="submit"
      aria-label="Buscar"
      class="btn-icon search-button"
      v-on:click="submit"
    ></button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    submit() {
      this.$router.push(`/search/${this.query}`);
    },
  },
};
</script>
