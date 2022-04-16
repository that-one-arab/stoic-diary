<template>
  <v-app>
    <app-nav-bar v-if="isNavbarDisplayed" />
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavBar from './components/AppNavBar';
export default {
  name: 'App',
  components: {
    AppNavBar,
  },
  data() {
    return {
      isNavbarDisplayed: false,
    };
  },

  watch: {
    // On each route change
    $route(value) {
      // If the route is Login or Register route, remove the navbar; else display the navbar
      if (value.name.search(/(Login|Register)/i)) this.isNavbarDisplayed = true;
      else this.isNavbarDisplayed = false;
    },
  },
};
</script>

<style>
/* Override */
.v-application {
  line-height: 0;
}

.h-100vh {
  height: 100vh;
}

.clickable {
  cursor: pointer;
}

.my-form-layout {
  width: 40%;
}

@media only screen and (max-width: 768px) {
  .login-form-layout {
    width: 85%;
  }
}

.error-text {
  color: red;
}
</style>
