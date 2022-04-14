<template>
  <v-container>
    <v-form v-model="valid">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="30"
            label="Type your current password"
            required
            class="mb-4"
          ></v-text-field>
          <br />
          <v-row justify="center">
            <v-btn :disabled="!valid" color="error" class="mr-4 mt-5">
              Remove my account
            </v-btn>
          </v-row>
        </v-col>
        <div
          class="subtitle-1 error-text mt-4"
          v-text="messages.incorrectPassword"
        ></div>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'RemoveMyAccount',
  data() {
    return {
      valid: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length <= 30 || 'Password must be less than 30 characters',
      ],
      messages: {
        incorrectPassword:
          'Your password is incorrect, please double check your password and try again',
      },
    };
  },
};
</script>
