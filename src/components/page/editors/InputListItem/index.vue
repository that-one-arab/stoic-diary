<template>
  <div class="list-input-container">
    <p class="list-input-prepend">{{ listNumber }}-</p>
    <input
      type="text"
      class="list-input-field"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      @click="$emit('refocus')"
      @keyup.enter="handleEnter"
      @keyup.delete="$emit('removeLine', i)"
      @keyup.up="handleKeyup"
      @keyup.down="handleKeydown"
      @keyup.esc="handleCloseSuggestionsDropdown"
    />
    <v-icon
      color="red"
      class="clickable list-input-close"
      @click="$emit('removeLine', i)"
    >
      mdi-close-box
    </v-icon>
    <ul
      v-if="isFocused && suggestionDropdown.isOpen"
      class="myUL"
      id="suggestions-ul"
    >
      <li v-for="(suggestion, i) in suggestions" :key="suggestion.id">
        <a
          class="dropdown_elements"
          v-bind:class="{ dropdown_elements_hovered: suggestion.hovered }"
          href="#"
          :id="`suggestion-${suggestion.id}`"
          @click="fillSuggestionToInput(suggestion.value, i)"
        >
          {{ suggestion.value }}
        </a>
      </li>
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
        isOpen: true,
        didReturnResults: false,
      },
      suggestions: [
        {
          id: 1,
          value: 'Adele',
          hovered: false,
        },
        {
          id: 2,
          value: 'Agnes',
          hovered: false,
        },
        {
          id: 3,
          value: 'Billy',
          hovered: false,
        },
        {
          id: 4,
          value: 'Bob',
          hovered: false,
        },
        {
          id: 5,
          value: 'Calvin',
          hovered: false,
        },
        {
          id: 6,
          value: 'Christina',
          hovered: false,
        },
        {
          id: 7,
          value: 'Adele',
          hovered: false,
        },
        {
          id: 8,
          value: 'Agnes',
          hovered: false,
        },
        {
          id: 9,
          value: 'Billy',
          hovered: false,
        },
        {
          id: 10,
          value: 'Bob',
          hovered: false,
        },
        {
          id: 11,
          value: 'Calvin',
          hovered: false,
        },
        {
          id: 12,
          value: 'Christina',
          hovered: false,
        },
        {
          id: 13,
          value: 'Alice',
          hovered: false,
        },
      ],
    };
  },
  computed: {
    listNumber() {
      return this.i + 1;
    },

    canHoverSuggestions() {
      const isSuggestionDropdownOpen = this.suggestionDropdown.isOpen;
      const suggestionDropdownHasResults = this.suggestions.length;

      return !!isSuggestionDropdownOpen && !!suggestionDropdownHasResults;
    },
  },
  methods: {
    handleKeyup() {
      const hoveredSuggestionIndex = this.suggestions.findIndex(
        (suggestion) => suggestion.hovered
      );

      /** If suggestions can be hovered and there is current hovered suggestion */
      if (this.canHoverSuggestions && hoveredSuggestionIndex !== -1) {
        /** If the current hovered element is not the first element (index 0)*/
        if (hoveredSuggestionIndex > 0) {
          const nextIndex = hoveredSuggestionIndex - 1;
          this.hoverSuggestion(nextIndex, hoveredSuggestionIndex);

          // Check if the newly hovered suggestion is visible
          const hoveredSuggestionId = this.suggestions[nextIndex].id;
          const isElVisible = this.isListElementVisible(hoveredSuggestionId);
          if (isElVisible === false) {
            this.scrollSuggestions('up');
          }
        } else {
          /** Else if the hovered element is the first element we de-hover the element */
          this.hoverSuggestion(null, 0);
          /** We refocus the input element as a sanity check */
          this.$emit('refocus');
        }
      } else {
        this.$emit('focusAboveLine', this.i);
      }
    },
    handleKeydown() {
      if (this.canHoverSuggestions) {
        const hoveredSuggestionIndex = this.suggestions.findIndex(
          (suggestion) => suggestion.hovered
        );
        /** If we already have a hovered element */
        if (hoveredSuggestionIndex !== -1) {
          // Hover the next suggestion (below the current one)
          const nextIndex = hoveredSuggestionIndex + 1;
          // Make sure the newIndex is between the length of the suggestions array
          if (this.suggestions.length - 1 > nextIndex) {
            this.hoverSuggestion(nextIndex, hoveredSuggestionIndex);

            // Check if the newly hovered suggestion is visible
            const hoveredSuggestionId = this.suggestions[nextIndex].id;
            const isElVisible = this.isListElementVisible(hoveredSuggestionId);
            if (isElVisible === false) {
              this.scrollSuggestions('down');
            }
          }
        } else {
          /** Else we set the first element as the current hovered element */
          this.hoverSuggestion(0);
        }
      } else {
        this.$emit('focusBelowLine', this.i);
      }
    },

    handleCloseSuggestionsDropdown() {
      this.suggestionDropdown.isOpen = false;
    },

    /**
     * @example this.hoverSuggestion(null, index) => dehovers the index
     */
    hoverSuggestion(newIndex = null, currentIndex = null) {
      if (newIndex !== null) this.suggestions[newIndex].hovered = true;
      if (currentIndex !== null) this.suggestions[currentIndex].hovered = false;
    },

    handleEnter() {
      const hoveredSuggestionIndex = this.suggestions.findIndex(
        (suggestion) => suggestion.hovered
      );
      // If the suggestions dropdown is open and an element is hovered we emit take the value of the hovered el and we paste it to the input field
      if (hoveredSuggestionIndex !== -1) {
        const hoveredSuggestionValue =
          this.suggestions[hoveredSuggestionIndex].value;
        // Change the input value to the hovered suggestion value
        this.fillSuggestionToInput(
          hoveredSuggestionValue,
          hoveredSuggestionIndex
        );
      } else {
        this.$emit('addNewLine');
      }
    },

    fillSuggestionToInput(suggesionValue, suggestionIndex) {
      this.$emit('input', suggesionValue);
      this.handleCloseSuggestionsDropdown();
      this.hoverSuggestion(null, suggestionIndex);
    },

    scrollSuggestions(scrollDirection) {
      // Get the suggestions dropdown container element
      const suggestionsContainer = document.getElementById('suggestions-ul');

      // Get an array of the elements in suggestions dropdown that are visible (in viewport)
      const visibleListElements = this.suggestions.filter(
        (suggestion) => this.isListElementVisible(suggestion.id) === true
      );

      // Get the height of one of the list elements (it doesn't matter since they are all the same height, we chose index 0)
      const heightOfListElement = document.getElementById(
        `suggestion-${visibleListElements[0].id}`
      ).scrollHeight;

      const heightOfAllVisibleElements =
        heightOfListElement * visibleListElements.length;

      if (scrollDirection === 'up')
        // Scroll the container up using the below formula
        suggestionsContainer.scrollTop -= heightOfAllVisibleElements;
      else if (scrollDirection === 'down')
        // Scroll the container down using the below formula
        suggestionsContainer.scrollTop += heightOfAllVisibleElements;
    },

    /**
     * @param {string} suggestionId the id of the suggestion
     * @returns {boolean} true if the element is in viewport, false otherwise
     */
    isListElementVisible(suggestionId) {
      const container = document.getElementById('suggestions-ul');

      const ele = document.getElementById(`suggestion-${suggestionId}`);

      const eleTop = ele.offsetTop;
      const eleBottom = eleTop + ele.clientHeight;

      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.clientHeight;

      // The element is fully visible in the container
      return (
        eleTop >= containerTop && eleBottom <= containerBottom
        // Some part of the element is visible in the container NOT USED
        // (eleTop < containerTop && containerTop < eleBottom) ||
        // (eleTop < containerBottom && containerBottom < eleBottom)
      );
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

.dropdown_elements {
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 14px;
  color: black;
  display: block;
}

.dropdown_elements_hovered {
  background-color: #36bcf18f;
  color: rgb(63, 6, 6);
}
</style>
