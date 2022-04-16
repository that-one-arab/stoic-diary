<template>
  <v-form v-model="valid">
    <v-container>
      <div class="d-flex justify-center align-center pb-10 h-100vh">
        <div class="my-form-layout">
          <v-card class="pa-8">
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="userIdentifier"
                  :rules="userIdentifierRules"
                  :counter="10"
                  label="Username or Email"
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

              <v-col cols="12" md="12">
                <v-switch v-model="rememberMe" label="Remember me"></v-switch>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-space-between">
              <v-col cols="12" sm="12" md="12" lg="6">
                <p>
                  <a href="/register">Or click here to register</a>
                </p>
              </v-col>
              <v-col cols="12" sm="12" md="3" lg="2">
                <v-btn elevation="2" @click="handleSubmit">Log in</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import { LOGIN_CREDENTIALS_MOCK } from '@/mock/credentials';
import { snackbarColors } from '@/components/SnackBar';

export default {
  name: 'LoginView',
  data() {
    return {
      valid: false,

      userIdentifier: '',
      userIdentifierRules: [(v) => !!v || 'This field is required'],

      password: '',
      rememberMe: false,
    };
  },
  methods: {
    handleSubmit() {
      const {
        userIdentifier,
        password,
        // rememberMe
      } = this;
      if (
        (userIdentifier === LOGIN_CREDENTIALS_MOCK.username ||
          this.userIdentifier === LOGIN_CREDENTIALS_MOCK.email) &&
        password === LOGIN_CREDENTIALS_MOCK.password
      ) {
        // Set user logged in state to true
        this.$store.commit('logInUser');
        // Push to dashboard
        this.$router.push('/dashboard');
      } else {
        // Display error snackbar
        this.$store.commit('showSnackbar', {
          header: 'Your credentails are incorrect',
          body: 'Please double check your credentials',
          variant: snackbarColors.error,
        });
      }
    },
  },
};
</script>
