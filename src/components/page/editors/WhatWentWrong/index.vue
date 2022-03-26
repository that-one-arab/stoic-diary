<template>
  <div :class="[templateClasses.inputContainer]">
    <label for="whatWentWrong" :class="[templateClasses.label]"
      >What went wrong</label
    >
    <!-- <textarea
      :class="[templateClasses.textArea]"
      id="whatWentWrong"
      v-bind:value="whatWentWrong"
      v-on:input="$emit('input', $event.target.value)"
      rows="6"
      placeholder="..."
    ></textarea> -->
    <input-list-item
      v-for="(item, i) in listItems"
      class="mb-2"
      :key="i"
      v-model="item.value"
      ref="testRef"
      @addNewLine="addNewLineHandler(i)"
    />
    <div class="d-flex justify-end">
      <v-icon color="blue" large class="clickable" @click="addNewLineHandler()">
        mdi-plus-box
      </v-icon>
    </div>
  </div>
</template>

<script>
import InputListItem from '../InputListItem/index.vue';
export default {
  name: 'WhatWentWrong',
  props: {
    whatWentWrong: String,
  },
  components: {
    InputListItem,
  },
  data() {
    return {
      listItems: [],
      templateClasses: {
        inputContainer: ['mb-3', 'd-flex', 'flex-column', 'align-items-start'],
        label: ['form-label', 'mb-3'],
        textArea: ['form-control', 'border'],
      },
    };
  },
  methods: {
    addNewLineHandler(index = null) {
      this.listItems = [...this.listItems, { value: '' }];
      const nextIndex =
        typeof index === 'number' ? index + 1 : this.listItems.length - 1;

      this.$nextTick(() => {
        this.$refs.testRef[nextIndex].$el.querySelector('input').focus();
      });
    },
  },
  created() {
    this.listItems = [
      {
        value: '',
      },
      {
        value: '',
      },
    ];
  },
};
</script>

<style></style>
