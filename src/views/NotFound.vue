<template>
  <main class="page-notfound">
    <h1 class="title">404</h1>
    <h2>Lo sentimos, la página que buscas no existe</h2>

    <router-link to="/"> Volver al inicio </router-link>
  </main>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss">
.page-notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
  background: linear-gradient(73.24deg, $accent-light 0%, $accent 100%);

  h1 {
    font-size: 150px;
    margin-bottom: 10px;
    line-height: 1em;
    color: $primary;
  }

  h2 {
    margin-bottom: 70px;
  }

  a {
    color: $primary;
    &:hover {
      color: white;
    }
  }
}
</style>
