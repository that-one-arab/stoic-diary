<template>
  <div :class="[templateClasses.inputContainer]">
    <label for="whatWentWrong" :class="[templateClasses.label]"
      >What went wrong</label
    >
    <textarea
      :class="[templateClasses.textArea]"
      id="whatWentWrong"
      v-bind:value="whatWentWrong"
      v-on:input="$emit('input', $event.target.value)"
      rows="6"
      placeholder="..."
    ></textarea>
    <input-list-item />
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
      templateClasses: {
        inputContainer: ['mb-3', 'd-flex', 'flex-column', 'align-items-start'],
        label: ['form-label'],
        textArea: ['form-control', 'border'],
      },
    };
  },
};
</script>

<style></style>
