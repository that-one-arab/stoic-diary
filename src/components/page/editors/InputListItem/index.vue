<template>
  <div class="list-input-container">
    <p class="list-input-prepend">{{ listNumber }}-</p>
    <input
      type="text"
      class="list-input-field"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      @click="$emit('refocus')"
      @keyup.enter="$emit('addNewLine')"
      @keyup.delete="$emit('removeLine', i)"
      @keyup.up="handleKeyup"
      @keyup.down="handleKeydown"
    />
    <v-icon
      color="red"
      class="clickable list-input-close"
      @click="$emit('removeLine', i)"
    >
      mdi-close-box
    </v-icon>
    <ul v-if="false" class="myUL">
      <li><a class="searchbox-elements-selected" href="#">Adele</a></li>
      <li><a class="searchbox-elements" href="#">Agnes</a></li>

      <li><a class="searchbox-elements" href="#">Billy</a></li>
      <li><a class="searchbox-elements" href="#">Bob</a></li>

      <li><a class="searchbox-elements" href="#">Calvin</a></li>
      <li><a class="searchbox-elements" href="#">Christina</a></li>
      <li><a class="searchbox-elements" href="#">Cindy</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InputListItem',
  props: {
    value: String,
    fieldIndex: Number,
    i: Number,
    isFocused: Boolean,
  },
  data() {
    return {
      suggestionDropdown: {
        isOpen: false,
        didReturnResults: false,
      },
    };
  },
  computed: {
    listNumber() {
      return this.i + 1;
    },
  },
  methods: {
    handleKeyup() {
      if (this.isFocused) {
        console.info('Focused!');
      } else {
        this.$emit('focusAboveLine', this.i);
      }
    },
    handleKeydown() {
      this.$emit('focusBelowLine', this.i);
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

.myUL {
  position: absolute;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-left: 20px;
  width: 450px;
  height: 200px;
  overflow: auto;
  z-index: 200;
}

.searchbox-elements {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 14px;
  color: black;
  display: block;
}

.searchbox-elements-selected {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #36bcf18f;
  padding: 12px;
  text-decoration: none;
  font-size: 14px;
  color: rgb(63, 6, 6);
  display: block;
}
</style>
