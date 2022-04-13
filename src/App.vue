<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
          @click="handleRouterPush(link)"
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    links: ['Dashboard', 'Page', 'Settings', 'Log Out'],
  }),

  methods: {
    handleRouterPush(link) {
      this.$router.push(`/${link.toLowerCase()}`);
    },
  },

  created() {
    const router = this.$router;
    const currentRoute = router.currentRoute.fullPath;
    if (currentRoute === '/') router.push('/dashboard');
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
</style>
