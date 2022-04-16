<template>
  <v-form v-model="valid">
    <v-container>
      <email-sent v-if="formHasSubmitted" />
      <div v-else class="d-flex justify-center align-center pb-10 h-100vh">
        <div class="my-form-layout">
          <v-card class="pa-8">
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  :counter="10"
                  label="Username"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="password"
                  label="Password"
                  required
                  type="password"
                ></v-text-field>
              </v-col>

              <v-row class="d-flex justify-space-between mt-4">
                <v-col cols="12" sm="12" md="12" lg="6">
                  <p>
                    <a href="/login">Or click here to login</a>
                  </p>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3">
                  <v-btn elevation="2" @click="handleSubmit">Register</v-btn>
                </v-col>
              </v-row>
            </v-row>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import EmailSent from '../components/Register/EmailSent.vue';

export default {
  name: 'LoginView',
  components: {
    EmailSent,
  },
  data() {
    return {
      valid: false,

      username: '',
      usernameRules: [
        (v) => !!v || 'Username is required',
        (v) => v.length <= 10 || 'Username must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      password: '',

      formHasSubmitted: false,
    };
  },
  methods: {
    handleSubmit() {
      // Form values
      //   const { email, password, rememberMe } = this;
      this.$router.push('/login');
    },
  },
};
</script>
