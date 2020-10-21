import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Profil from '../views/Profil.vue';
import auth from '../store/index'
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresLogout: true
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/me",
    name: "Profil",
    component: Profil,
    meta: {
      requiresAuth: true
    }
  }
];



const router = new VueRouter({
  routes: routes

});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (auth.getters.isLoggedIn == undefined || auth.getters.isLoggedIn == '') {
      next({
        path: '/login',
        query: {
          redirect: to.Path
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresLogout)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (auth.getters.isLoggedIn) {
      next({
        path: '/',
        query: {
          redirect: to.Path
        }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;