<template>
  <div>
    <change-username v-if="selectedTab === 'change-username'" />
    <change-password v-else-if="selectedTab === 'change-password'" />
    <remove-my-account v-else-if="selectedTab === 'remove-my-account'" />
  </div>
</template>

<script>
import ChangePassword from './ChangePassword.vue';
import ChangeUsername from './ChangeUsername.vue';
import RemoveMyAccount from './RemoveMyAccount.vue';

export default {
  name: 'TabRenderer',
  props: {
    selectedTab: String,
  },
  components: {
    ChangeUsername,
    ChangePassword,
    RemoveMyAccount,
  },
};
</script>

<style ChangePassword></style>
