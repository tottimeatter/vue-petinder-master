<template>
  <div id="app">
    <app-header />
    <div class="app-container">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
