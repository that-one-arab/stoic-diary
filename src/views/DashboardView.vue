<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="item in sidebarItems" :key="item" link>
                  <v-list-item-content>
                    <v-list-item-title> {{ item }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <!-- <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item> -->
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from '../components/HelloWorld';

export default {
  name: 'DashboardView',

  components: {
    // HelloWorld,
  },
  data() {
    return {
      links: ['Dashboard', 'Page', 'Settings', 'Log Out'],
      sidebarItems: [
        'Most wrong logs',
        'Most right logs',
        'Most will improve logs',
      ],
    };
  },
};
</script>
