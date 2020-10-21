<template>
  <div class="nav">
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
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
        <router-link to="/signup" class="btn navbar-btn btn-outline-light"
          >Signup</router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
