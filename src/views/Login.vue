<template>
  <main class="page-login">
    <section class="box-auth">
      <router-link to="/"
        ><img class="logo" alt="logo" src="@/assets/icon.svg"
      /></router-link>
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">
        Inicia sesión en Petinder y encuentra a tu nuevo mejor amigo.
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
        <button v-on:click="login" class="btn btn-primary btn-lg">
          Iniciar sesión
        </button>

        <p class="auth-error" v-if="error != null">
          Error {{ error.code }} : {{ error.message }}
        </p>
      </form>

      <p class="auth-bottom">
        ¿No tienes cuenta?
        <router-link to="/register" class="alink">Regístrate</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "login",
  data: function () {
    return {
      // Completar
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login: function (e) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          console.log(
            `Sesión iniciada correctamente con el correo: ${userCredential.user.email}`
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
