<template>
  <main class="page-register">
    <section class="box-auth">
      <router-link to="/"
        ><img class="logo" alt="logo" src="@/assets/icon.svg"
      /></router-link>
      <h1 class="main-title">Registro</h1>
      <p class="auth-intro">
        Regístrate en Petinder y encuentra a tu nuevo mejor amigo.
      </p>

      <form>
        <div class="form-group">
          <label class="form-label" for="username">Email</label>
          <input
            placeholder="Correo electrónico"
            type="email"
            id="email"
            class="form-control"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Contraseña</label>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <button v-on:click="register" class="btn btn-primary btn-lg">
          Registrar
        </button>

        <p class="auth-error" v-if="error != null">
          Error {{ error.code }} : {{ error.message }}
        </p>
      </form>

      <p class="auth-bottom">
        ¿Ya tienes cuenta?
        <router-link to="/login" class="alink">Inicia sesión</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    register: function (e) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          console.log(
            `Nuevo usuario creado con el correo: ${userCredential.user.email}`
          );
          this.$router.push("/");

          // Completar
        })
        .catch((error) => {
          this.error = error;
          console.log(error.code);
          console.log(error.message);
        });

      e.preventDefault();
    },
  },
};
</script>
