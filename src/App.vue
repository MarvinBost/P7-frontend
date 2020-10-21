<template>
  <div id="app">
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <router-link to="/"><div class="navbrand"></div></router-link>

      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarT"
        aria-controls="navbarT"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-center justify-content-end"
        id="navbarT"
      >
        <ul class="navbar-nav">
          <li class="nav-item mx-2 mb-2 my-md-0">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item mx-2 mb-2 my-md-0">
            <router-link class="nav-link" v-if="!logged" to="/signup"
              >Signup</router-link
            >
          </li>
        </ul>

        <router-link
          class="btn navbar-btn btn-outline-light"
          v-if="!logged"
          to="/login"
          >Login</router-link
        >
        <a
          href=""
          class="btn navbar-btn btn-outline-light"
          v-if="logged"
          @click="logout"
          >Logout</a
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
body,
html {
  height: 100% !important;
}
a {
  text-decoration: none !important;
}
.navbrand {
  background-image: url("../src/assets/logo-nav.png");
}
@import "./assets/custom.scss";
</style>

<script>
export default {
  data() {
    return {
      logged: false
    };
  },
  async created() {
    if (this.$store.getters.isLoggedIn) {
      console.log("je suis connecté !");
      this.logged = true;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>