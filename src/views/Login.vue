<template>
  <div class="py-5 text-center bg-dark">
    <div class="container">
      <div class="row">
        <div class="mx-auto col-md-6 col-10 bg-dark p-5">
          <h1 class="mb-4">Login</h1>
          <div v-if="errors.length">
            <b-alert
              variant="danger"
              show
              v-for="error in errors"
              :key="error.message"
            >
              {{ error.message }}
            </b-alert>
          </div>
          <form v-on:submit="checkForm()">
            <div class="form-group">
              <input
                aria-label="Email"
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email"
                id="email"
              />
            </div>
            <div class="form-group mb-3">
              <input
                aria-label="Password"
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password"
                id="password"
              />
            </div>
            <button type="submit" class="btn btn-primary text-dark">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  name: "Login",
  data: () => ({
    errors: [],
    email: "",
    password: "",
    error: false
  }),
  methods: {
    checkForm() {
      if (this.email && this.password) {
        this.login();
      }

      this.errors = [];

      if (!this.email) {
        return this.errors.push({ message: "Email required." });
      }
      if (!this.password) {
        return this.errors.push({ message: "Password required." });
      }
    },
    async created() {},
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password
        };
        AuthService.login(credentials)
          .then(response => {
            const token = response.data.token;
            const user = response.data.user;
            this.$store.dispatch("login", { token, user });
            window.location.reload();
          })
          .catch(err => {
            console.log(err);
            this.errors.push({
              message: "Aucuns compte trouvé"
            });
          });
      } catch (error) {
        this.errors.push(error.response.data.msg);
      }
    }
  }
};
</script>