<template>
  <div>
    <!-- Render this after the form has been submitted  -->
    <email-sent v-if="formHasSubmitted" />
    <!-- Render this initially -->
    <div
      v-else
      class="container h-100vh d-flex align-items-center justify-content-center"
    >
      <div class="row">
        <div class="mb-3">
          <label for="usernameInput" class="form-label">Username</label>
          <input class="form-control" id="usernameInput" v-model="username" />
        </div>
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
        <button class="btn btn-primary" @click="handleSubmit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import EmailSent from '../components/Register/EmailSent.vue';

export default {
  components: { EmailSent },
  name: 'RegisterView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      formHasSubmitted: false,
    };
  },
  methods: {
    handleSubmit() {
      // Form values
      //   const { username, email, password } = this
      this.formHasSubmitted = true;
    },
  },
};
</script>

<style></style>
