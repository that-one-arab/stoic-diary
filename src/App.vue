<template>
  <v-app>
    <app-nav-bar />
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
    <snack-bar />
  </v-app>
</template>

<script>
import AppNavBar from './components/AppNavBar';
import SnackBar from '@/components/SnackBar';

export default {
  name: 'App',
  components: {
    AppNavBar,
    SnackBar,
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
