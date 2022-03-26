<template>
  <div :class="[templateClasses.inputContainer]">
    <label for="whatWentWrong" :class="[templateClasses.label]"
      >What went wrong</label
    >
    <input-list-item
      v-for="(item, i) in listItems"
      class=""
      :key="i"
      :i="i"
      :isFocused="focusedElementIndex === i"
      v-model="item.value"
      ref="listRef"
      @addNewLine="addNewLineHandler(i)"
      @removeLine="removeLineHandler"
      @focusAboveLine="focusAboveLineHandler"
      @focusBelowLine="focusBelowLineHandler"
      @refocus="focusedElementIndex = i"
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
      focusedElementIndex: undefined,
      templateClasses: {
        inputContainer: ['mb-3', 'd-flex', 'flex-column', 'align-items-start'],
        label: ['form-label', 'mb-6'],
        textArea: ['form-control', 'border'],
      },
    };
  },
  methods: {
    addNewLineHandler(index = null) {
      this.listItems = [...this.listItems, { value: '' }];
      /** If index is not supplied: simply add and focus the last item in the list */
      const nextIndex =
        typeof index === 'number' ? index + 1 : this.listItems.length - 1;

      this.focusLine(nextIndex, { waitForNextTick: true });
    },

    removeLineHandler(index) {
      this.listItems.length !== 1 && this.listItems.splice(index, 1);
      this.$nextTick(() => {
        /** If deleted el is last el: list of inputs will lose focus so we handle it here */
        if (document.activeElement.tagName === 'BODY') {
          const lastIndex = this.listItems.length - 1;
          this.$refs.listRef[lastIndex].$el.querySelector('input').focus();
          this.focusLine(lastIndex);
        }
      });
    },

    focusAboveLineHandler(index) {
      index - 1 >= 0 && this.focusLine(index - 1);
    },

    focusBelowLineHandler(index) {
      console.info('Focusing below line!');
      index + 1 <= this.listItems.length && this.focusLine(index + 1);
    },

    /** HELPERS */

    focusLine(index, { waitForNextTick = false } = {}) {
      if (!waitForNextTick) {
        this.$refs.listRef[index].$el.querySelector('input').focus();
        this.focusedElementIndex = index;
      } else {
        this.$nextTick(() => {
          this.$refs.listRef[index].$el.querySelector('input').focus();
          this.focusedElementIndex = index;
        });
      }
    },
  },
  created() {
    this.listItems = [
      {
        value: '',
      },
    ];
  },
};
</script>
