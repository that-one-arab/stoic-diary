<template>
  <div
    class="container h-100vh d-flex align-items-center justify-content-center"
    style=""
  >
    <div class="row">
      <div class="mb-3">
        <label for="emailInput" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="passwordInput"
          v-model="password"
        />
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="rememberMeCheckbox"
          v-model="rememberMe"
        />
        <label class="form-check-label" for="rememberMeCheckbox"
          >Remember me</label
        >
      </div>
      <button class="btn btn-primary" @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    handleSubmit() {
      // Form values
      //   const { email, password, rememberMe } = this;
    },
  },
};
</script>

<style></style>
