<template>
  <v-container>
    <div class="d-flex justify-center mb-5">
      <NavBar />
    </div>
    <div class="d-flex justify-center">
      <v-card width="60%">
        <v-row class="ma-4 no-flex">
          <v-col lg="12">
            <WhatWentWrong />
          </v-col>
          <v-col lg="12">
            <WhatWentRight />
          </v-col>
          <v-col lg="12">
            <WhatCanBeImproved />
          </v-col>
          <br />
          <!-- <div class="footer">
              <button class="btn btn-outline-success ml-auto">
                <i class="fas fa-pen-fancy"></i>
              </button>
            </div> -->
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import WhatWentWrong from '../components/page/editors/WhatWentWrong/index.vue';
import WhatWentRight from '../components/page/editors/WhatWentRight/index.vue';
import WhatCanBeImproved from '../components/page/editors/WhatCanBeImproved/index.vue';
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

/* Some bug with v-row that doesn't obey the breakpoints (or maybe it's just me who's bugged...) */
.no-flex {
  display: inherit;
}
</style>
