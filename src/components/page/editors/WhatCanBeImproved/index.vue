<template>
  <div :class="[templateClasses.inputContainer]">
    <label for="whatCanBeImproved" :class="[templateClasses.label]"
      >What can be improved</label
    >
    <textarea
      :class="[templateClasses.textArea]"
      id="whatCanBeImproved"
      v-bind:value="whatCanBeImproved"
      v-on:input="$emit('input', $event.target.value)"
      placeholder="..."
      rows="6"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'WhatCanBeImproved',
  props: {
    whatCanBeImproved: String,
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
