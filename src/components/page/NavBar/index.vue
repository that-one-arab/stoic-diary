<template>
  <v-card class="temp1 temp3">
    <v-banner color="light-blue lighten-5">
      <div class="d-flex justify-space-between">
        <v-icon large class="clickable" @click="pushToPrevDay">
          mdi-arrow-left
        </v-icon>

        <v-btn color="primary" outlined @click="pickerOn = true">
          {{ picker }}
        </v-btn>

        <v-icon large class="clickable" @click="pushToNextDay">
          mdi-arrow-right
        </v-icon>
      </div>
      <!-- The date picker -->
      <v-row v-if="pickerOn" justify="center" class="temp2">
        <v-date-picker v-model="picker" @change="handleChange"></v-date-picker>
      </v-row>
    </v-banner>
  </v-card>
</template>

<script>
import {
  parseDateToYYYYMMDD,
  addDays,
  deductDays,
} from '../../../util/date/index.js';

export default {
  name: 'NavBar',
  data() {
    return {
      pickerOn: false,
      picker: '',
    };
  },
  methods: {
    handleChange(date) {
      this.picker = date;
      this.pickerOn = false;
      this.$router.push(`/page?date=${date}`);
    },

    pushToNextDay() {
      const newDate = addDays(this.picker, 1);
      const parsedDate = parseDateToYYYYMMDD(newDate);
      this.picker = parsedDate;
      this.$router.push(`/page?date=${parsedDate}`);
    },

    pushToPrevDay() {
      const newDate = deductDays(this.picker, 1);
      const parsedDate = parseDateToYYYYMMDD(newDate);
      this.picker = parsedDate;
      this.$router.push(`/page?date=${parsedDate}`);
    },
  },

  watch: {
    // Keep the state updated if user uses browser history to go back and forth
    $route: function (to) {
      this.picker = to.query.date;
    },
  },

  created() {
    this.picker = parseDateToYYYYMMDD('today');
  },
};
</script>

<style scoped>
.temp1 {
  position: relative;
}

.temp2 {
  margin-top: 10px;
  position: absolute;
  left: 39%;
  z-index: 20;
}

@media screen and (max-width: 1024px) {
  .temp2 {
    left: 26%;
  }
}

.temp3 {
  width: 60%;
}
</style>
