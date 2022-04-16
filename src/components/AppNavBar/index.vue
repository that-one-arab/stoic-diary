<template>
  <v-app-bar v-if="isNavbarDisplayed" app color="white" flat>
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
</template>

<script>
export default {
  name: 'AppNavBar',

  data() {
    return {
      links: ['Dashboard', 'Page', 'Settings', 'Log Out'],
      isNavbarDisplayed: false,
    };
  },

  methods: {
    handleRouterPush(link) {
      this.$router.push(`/${link.toLowerCase()}`);
    },
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

<style></style>
