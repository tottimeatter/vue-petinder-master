<template>
  <header
    id="header"
    :class="`header ${this.$route.path === '/' ? 'header-home' : ''} ${
      onScrollTop ? 'transparent' : ''
    }
    `"
  >
    <div class="header-container container">
      <nav>
        <router-link class="btn-icon logo-btn" to="/">
          <img
            class="logo logo-normal"
            src="@/assets/logo.svg"
            alt="Logo petinder"
          />
          <img
            class="logo logo-white"
            src="@/assets/logo_white.svg"
            alt="Logo petinder"
          />
        </router-link>

        <ul class="menu-links">
          <li><router-link to="">Servicios</router-link></li>
          <li><router-link to="">Sobre nosotros</router-link></li>
          <li><router-link to="">Contactar</router-link></li>
        </ul>
      </nav>

      <div class="nav-right">
        <div class="user-details" v-if="isLoggedIn">
          <span class="user-email">{{ currentUser.email }}</span>
          <router-link class="user-avatar" to="/">
            <img
              class="user-avatar-img"
              src="@/assets/avatar.svg"
              alt="Avatar"
            />
          </router-link>
          <button class="btn btn-transparent btn-logout" v-on:click="logout">
            <img src="@/assets/icons/icon_logout.svg" alt="Cerrar sesión" />
          </button>

          <button class="btn btn-transparent btn-logout">
            <router-link to="/new">Nueva mascota</router-link>
          </button>
        </div>

        <router-link
          v-else
          to="/login"
          class="btn btn-login btn-light"
          title="Iniciar sesión"
          >Iniciar sesión</router-link
        >

        <div id="menuIcon" v-on:click="handleMenu" class="menu-icon">
          <div
            id="menuIconBar"
            :class="`menu-icon-bar  ${menuOpen ? 'menu-icon-cross' : ''}`"
          ></div>
        </div>
      </div>
    </div>
  </header>

  <div :class="`menu  ${menuOpen ? 'menu-visible' : ''}`" id="menu">
    <nav id="navMobile" class="menu-nav-mobile">
      <ul class="menu-links">
        <li><router-link to="">Servicios</router-link></li>
        <li><router-link to="">Sobre nosotros</router-link></li>
        <li><router-link to="">Contactar</router-link></li>
      </ul>
      <router-link to="/login" class="btn-login btn btn-light"
        >Iniciar sesión</router-link
      >
    </nav>
  </div>
</template>

<script>
import _ from "lodash";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "Header",
  data() {
    return {
      currentUser: null,
      isLoggedIn: null,
      onScrollTop: window.scrollY <= 0 ? true : false,
      menuOpen: false,
    };
  },
  created() {
    // scroll position
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        this.onScrollTop = window.scrollY <= 0 ? true : false;
      }, 200)
    );

    // auth status
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this.currentUser = null;
      }
    });
  },
  methods: {
    handleMenu: function () {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.isLoggedIn = false;
          this.currentUser = null;
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
