<template>
  <div>
    <div class="class-x">
      <p class="class-y">
        <input type="text" class="class-z" />
        <!-- <span class="error-container">some error here</span> -->
      </p>
    </div>
    <div class="class-x">
      <p class="class-y">
        <input type="text" class="class-z" />
        <!-- <span class="error-container">some error here</span> -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputListItem',
};
</script>

<style scoped>
.class-x {
  -webkit-text-size-adjust: 100%;
  font-family: 'Museo Sans', Arial, Helvetica, sans-serif;
  font-size: 100%;
  line-height: 1.25;
  color: #6d6e70;
  box-sizing: border-box;
}
.class-y {
  -webkit-text-size-adjust: 100%;
  font-family: 'Museo Sans', Arial, Helvetica, sans-serif;
  color: #6d6e70;
  box-sizing: border-box;
  margin: 0 0 1.2857142857em;
  word-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5714285714em;
  position: relative;
  margin-bottom: 0;
}
.class-z {
  -webkit-text-size-adjust: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
  font-family: inherit;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5714285714em;
  display: inline-block;
  padding: 0;
  background: 0 0;
  border: none;
  border-bottom: 1px dashed #6c9394;
  width: 100%;
  border-radius: 0;
  color: #444;
  border-color: #444;
}
.class-z:focus {
  outline: none;
}
</style>
