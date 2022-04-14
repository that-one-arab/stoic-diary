<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item
              link
              v-for="tab in sidebarTabs"
              :key="tab.value"
              :class="tab.value === selectedTab && 'blue lighten-1'"
              @click="selectedTab = tab.value"
            >
              <v-list-item-content>
                <v-list-item-title> {{ tab.label }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <tab-renderer :selectedTab="selectedTab" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TabRenderer from '@/components/Settings/TabRenderer.vue';
export default {
  components: { TabRenderer },
  name: 'SettingsView',
  data() {
    return {
      sidebarTabs: [
        {
          label: 'Change Username',
          value: 'change-username',
        },
        {
          label: 'Change Password',
          value: 'change-password',
        },
        {
          label: 'Remove My Account',
          value: 'remove-my-account',
        },
      ],
      selectedTab: 'change-username',
    };
  },
};
</script>
