<template>
  <div class="list-input-container">
    <p class="list-input-prepend">{{ listNumber }}-</p>
    <input
      type="text"
      class="list-input-field"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('addNewLine')"
      @keyup.delete="$emit('removeLine', i)"
      @keyup.up="$emit('focusAboveLine', i)"
      @keyup.down="$emit('focusBelowLine', i)"
    />
    <v-icon
      color="red"
      class="clickable list-input-close"
      @click="$emit('removeLine', i)"
    >
      mdi-close-box
    </v-icon>
  </div>
</template>

<script>
export default {
  name: 'InputListItem',
  props: {
    value: String,
    fieldIndex: Number,
    i: Number,
  },
  computed: {
    listNumber() {
      return this.i + 1;
    },
  },
};
</script>

<style scoped>
.list-input-container {
  margin-left: 15px;
  width: 100%;
}

.list-input-prepend {
  display: inline-block;
  margin-right: 5px;
}

.list-input-field {
  -webkit-text-size-adjust: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
  font-family: inherit;
  margin: 0;
  margin-left: auto;
  display: inline-block;
  padding: 0;
  background: 0 0;
  border: none;
  border-bottom: 1px dashed #6c9394;
  width: 95%;
  color: #444;
  border-color: #444;
}
.list-input-field:focus {
  outline: none;
}

.list-input-close {
  margin-left: 3px;
}
</style>
