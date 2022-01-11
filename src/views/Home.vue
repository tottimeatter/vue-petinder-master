<template>
  <main class="page-home">
    <section class="block-featured">
      <div class="container">
        <div class="block-featured-content">
          <h1 class="main-title">Perretes y gatetes <span>en tu zona</span></h1>
          <p class="featured-text">
            Te ayudamos a encontrar el amigo fiel que necesitas. Lo tienes a una
            pata de distancia.
          </p>

          <search-bar />
        </div>
      </div>
    </section>
    <section class="block-list">
      <div class="container">
        <h2 class="title">Últimas incorporaciones</h2>

        <pet-list :pets="pets" />
      </div>
    </section>
    <section class="block-actions">
      <div class="container">
        <div class="row justify-content-between">
          <article class="action-item col">
            <router-link to="/">
              <div class="ball-icon">
                <img src="@/assets/icons/icon_apadrina.svg" alt="Apadrina" />
              </div>
              <div class="action-content">
                <h3 class="action-title">Apadrina</h3>
                <p class="action-text">Mientras llega la adopción</p>
              </div>
            </router-link>
          </article>
          <article class="action-item col">
            <router-link to="/">
              <div class="ball-icon">
                <img src="@/assets/icons/icon_adopta.svg" alt="Adopta" />
              </div>
              <div class="action-content">
                <h3 class="action-title">Adopta</h3>
                <p class="action-text">El amigo que necesitas</p>
              </div>
            </router-link>
          </article>
          <article class="action-item col">
            <router-link to="/">
              <div class="ball-icon">
                <img src="@/assets/icons/icon_socio.svg" alt="Hazte socio" />
              </div>
              <div class="action-content">
                <h3 class="action-title">Hazte socio</h3>
                <p class="action-text">Solo 10€/mes</p>
              </div>
            </router-link>
          </article>
          <article class="action-item col">
            <router-link to="/">
              <div class="ball-icon">
                <img
                  src="@/assets/icons/icon_donaciones.svg"
                  alt="Donaciones"
                />
              </div>
              <div class="action-content">
                <h3 class="action-title">Donaciones</h3>
                <p class="action-text">Con poco haces mucho</p>
              </div>
            </router-link>
          </article>
          <article class="action-item col">
            <router-link to="/">
              <div class="ball-icon">
                <img
                  src="@/assets/icons/icon_empresas.svg"
                  alt="Empresas solidarias"
                />
              </div>
              <div class="action-content">
                <h3 class="action-title">Empresas solidarias</h3>
                <p class="action-text">Descubre cómo colaborar</p>
              </div>
            </router-link>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import PetList from "@/components/PetList";

import { getAllPets } from "../db";

export default {
  name: "Home",
  components: { SearchBar, PetList },
  data() {
    return {
      pets: null,
    };
  },
  mounted() {
    getAllPets().then((pets) => {
      this.pets = pets;
    });
  },
};
</script>
