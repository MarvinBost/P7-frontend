<template>
  <div class="py-5 text-center bg-dark">
    <div class="container">
      <div class="row">
        <div class="mx-auto col-md-6 col-10 bg-dark p-5-lg py-5">
          <h1 class="mb-4">Signup</h1>
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

          <form @submit.prevent="checkForm()">
            <div class="form-group">
              <input
                aria-label="Email"
                type="email"
                class="form-control"
                placeholder="Email"
                autocomplete="email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                aria-label="Username"
                type="text"
                class="form-control"
                placeholder="Username"
                autocomplete="username"
                name="username"
                v-model="username"
              />
            </div>
            <div class="form-group mb-3">
              <input
                aria-label="Password"
                type="password"
                class="form-control"
                placeholder="Password"
                autocomplete="email"
                v-model="password"
              />
            </div>
            <button type="submit" class="btn btn-primary text-dark">
              Signup
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
  name: "",
  data() {
    return {
      errors: [],
      password: "",
      email: "",
      username: ""
    };
  },
  methods: {
    checkForm() {
      if (this.email && this.password && this.username) {
        this.signUp();
      }

      this.errors = [];

      if (!this.email) {
        return this.errors.push({ message: "Email required." });
      }
      if (!this.password) {
        return this.errors.push({ message: "Password required." });
      }
      if (!this.username) {
        return this.errors.push({ message: "Username required." });
      }
    },
    signUp() {
      try {
        const payload = {
          username: this.username,
          password: this.password,
          email: this.email
        };
        AuthService.signUp(payload).then(response => {
          if (response.status == 200) {
            this.errors.push({ message: response.data.error });
          }
          if (response.status == 201) {
            AuthService.login(payload).then(res => {
              const token = res.data.token;
              const user = res.data.user;
              this.$store.dispatch("login", { token, user });
              window.location.reload();
            });
          }
        });
      } catch (error) {
        this.errors.push({ message: error });
      }
    }
  }
};
</script>