<template>
  <div id="app" class="filter-dark">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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
          <li class="nav-item mb-2 my-md-0">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item mb-2 my-md-0">
            <router-link v-if="admin" class="nav-link" to="/admin"
              >Admin</router-link
            >
          </li>
          <li class="nav-item mb-2 my-md-0">
            <router-link v-if="logged" class="nav-link" to="/me"
              >Profil</router-link
            >
          </li>
          <li class="nav-item mb-2 my-md-0">
            <router-link v-if="!logged" class="nav-link" to="/signup"
              >Signup</router-link
            >
          </li>
        </ul>

        <router-link
          class="btn navbar-btn btn-outline-light ml-2"
          v-if="!logged"
          to="/login"
          >Login</router-link
        >
        <a
          href=""
          class="btn navbar-btn btn-outline-light ml-2"
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
.bg-custom {
  background-image: url(https://images8.alphacoders.com/926/926492.jpg);
  background-position: center center;
  background-size: cover;
}
@import "./assets/custom.scss";
</style>

<script>
import Data from "@/services/Data.js";
export default {
  data() {
    return {
      logged: false,
      admin: false
    };
  },
  async created() {
    if (this.$store.getters.isLoggedIn) {
      this.logged = true;
      this.admin = await Data.isAdmin();
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>