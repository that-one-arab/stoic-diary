<template>
  <div class="container">
    <NavBar />
    <br />
    <WhatWentWrong v-model="whatWentWrong" />
    <WhatWentRight v-model="whatWentRight" />
    <WhatCanBeImproved v-model="whatCanBeImproved" />
    <br />
    <div class="footer">
      <button class="btn btn-outline-success ml-auto">
        <i class="fas fa-pen-fancy"></i>
      </button>
    </div>
  </div>
</template>

<script>
import WhatWentWrong from '../components/page/editors/WhatWentWrong/index.vue';
import WhatWentRight from '../components/page/editors/WhatWentWrong/index.vue';
import WhatCanBeImproved from '../components/page/editors/WhatWentWrong/index.vue';
import NavBar from '../components/page/NavBar/index.vue';

export default {
  name: 'PageView',
  components: {
    WhatWentWrong,
    WhatWentRight,
    WhatCanBeImproved,
    NavBar,
  },
  data() {
    return {
      whatWentWrong: '',
      whatWentRight: '',
      whatCanBeImproved: '',
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row-reverse;
}
</style>
