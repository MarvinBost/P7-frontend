<template>
  <div>
    <div
      class="py-5 text-center text-white align-items-center d-flex section-parallax filter-dark"
    >
      <div class="container py-5">
        <div class="row">
          <div class="mx-auto col-lg-8 col-md-10">
            <h1>Hello 👋🏻 {{ secretMessage.username }}</h1>
            <p>Vos informations :</p>

            <!-- <img
              src="../assets/logos/icon-left-font-monochrome-white.svg"
              alt="logo"
            />
            <p class="lead mb-5">
              Réseau social d'entreprise
            </p>
            <router-link class="btn btn-lg btn-info mx-1" to="/signup"
              >Signup</router-link
            >
            <router-link class="btn btn-lg mx-1 btn-outline-info" to="/login"
              >Login</router-link
            > -->
          </div>
        </div>
      </div>
    </div>
    <div class="py-3 bg-dark fixed-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="mb-0">© 2020-2021 Groupomania. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  data() {
    return {
      secretMessage: ""
    };
  },
  async created() {
    this.secretMessage = await AuthService.getSecretContent();
  }
};
</script>

<style>
.section-parallax {
  background-image: url("../assets/bg.jpg") !important;
  background-position: center center;
  background-size: cover;
}
</style>
