<template>
  <div>
    <div
      class="py-5 text-center text-white align-items-center d-flex section-parallax filter-dark"
    >
      <div class="container py-5">
        <div class="row">
          <div class="mx-auto col-lg-8 col-md-10">
            <h1>Hello 👋🏻 {{ me.username }}</h1>
            <div class="border border-info p-3 bg-dark">
              <h5 class="h5">Vos informations :</h5>
              <p>
                Email :
                <span class="badge badge-info text-dark">{{ me.email }}</span>
              </p>
              <p>
                Username :
                <span class="badge badge-info text-dark">{{
                  me.username
                }}</span>
              </p>
              <p class="text-info mt-5">Supprimer votre profil</p>
              <button class="btn btn-danger" @click="userDelete(me)">
                Supprimer
              </button>
            </div>

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
import Data from "@/services/Data.js";
export default {
  data() {
    return {
      me: ""
    };
  },
  async created() {
    this.me = await Data.getMe();
  },
  methods: {
    userDelete(target) {
      Data.deleteUser(target.id).then(user => {
        console.log(user);
        this.$store.dispatch("logout");
        location.reload();
      });
    }
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
