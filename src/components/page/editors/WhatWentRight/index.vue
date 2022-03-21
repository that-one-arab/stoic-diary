<template>
  <div :class="[templateClasses.inputContainer]">
    <label for="whatWentRight" :class="[templateClasses.label]"
      >What went right</label
    >
    <textarea
      :class="[templateClasses.textArea]"
      id="whatWentRight"
      v-bind:value="whatWentRight"
      v-on:input="$emit('input', $event.target.value)"
      placeholder="..."
      rows="6"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'WhatWentRight',
  props: {
    whatWentRight: String,
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
