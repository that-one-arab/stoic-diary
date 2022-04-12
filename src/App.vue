<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
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
</style>
