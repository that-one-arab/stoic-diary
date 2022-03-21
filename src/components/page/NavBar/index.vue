<template>
  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container-fluid">
      <!-- <p class="navbar-brand">Fixed top</p> -->
      <i class="fas fa-arrow-left clickable"></i>
      <div class="d-inline-flex">
        <div class="ms-2">
          <input type="date" :value="getParsedDate()" class="primary" />
          <button class="btn btn-primary">
            <i class="far fa-edit"> </i>
          </button>
        </div>
      </div>
      <i class="fas fa-arrow-right clickable"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',

  methods: {
    getParsedDate() {
      return new Date().toISOString().split('T')[0];
    },
  },
};
</script>

<style></style>
