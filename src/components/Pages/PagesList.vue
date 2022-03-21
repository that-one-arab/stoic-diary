<template>
  <div>
    <h1>Diary</h1>
    <div class="">
      <div class="no-interactive"></div>
      <iframe
        src="http://localhost:8080/page"
        title="page"
        class="preview"
        scrolling="no"
      >
      </iframe>
    </div>
    <!-- <div class="card" style="width: 18rem">
      <img
        src="https://images.unsplash.com/photo-1528459199957-0ff28496a7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1943&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'PagesList',
};
</script>

<style>
.no-interactive {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 4000;
}

.preview {
  width: 600px;
  height: 400px;
  -webkit-transform: scale(0.25);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  border: 4px solid blue;
  margin: 0 0 -300px 0;
}
</style>
