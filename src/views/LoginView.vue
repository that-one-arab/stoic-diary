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
              <v-col cols="12" md="12" class="d-flex justify-end">
                <v-btn elevation="2">Log in</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-form>
</template>

<script>
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
      // Form values
      //   const { email, password, rememberMe } = this;
    },
  },
};
</script>
