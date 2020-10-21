<template>
  <div class="py-5 text-center bg-dark">
    <div class="container">
      <div class="row">
        <div class="mx-auto col-md-6 col-10 bg-dark p-5-lg py-5">
          <h1 class="mb-4">Signin</h1>
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

          <form @submit="checkForm" method="post">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                autocomplete="email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
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
                type="password"
                class="form-control"
                placeholder="Password"
                autocomplete="email"
                v-model="password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Signin</button>
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
    checkForm: function(e) {
      if (this.email && this.password && this.username) {
        e.preventDefault();
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
    async signUp() {
      try {
        const payload = {
          username: this.username,
          password: this.password,
          email: this.email
        };
        const response = await AuthService.signUp(payload);
        this.errors.push({ message: response });
        this.$router.push("/");
      } catch (error) {
        this.errors.push({ message: error });
      }
    }
  }
};
</script>