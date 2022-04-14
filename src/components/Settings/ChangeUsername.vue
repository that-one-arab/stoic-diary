<template>
  <v-container>
    <v-form v-model="valid">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <v-text-field
            v-model="username"
            :rules="nameRules"
            :counter="20"
            label="Type in your new Username"
            :placeholder="currentUsername"
            required
            class="mb-4"
          ></v-text-field>
          <v-btn :disabled="!valid" color="success" class="mr-4">
            Submit
          </v-btn>
          <div
            class="subtitle-1 error-text"
            v-text="messages.incorrectPassword"
          ></div>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'ChangeUsername',
  data() {
    return {
      valid: false,
      currentUsername: 'MikeWalberg',
      username: '',
      nameRules: [
        (v) => !!v || 'Username is required',
        (v) => v.length <= 20 || 'Username must be less than 20 characters',
        (v) => v.length >= 6 || 'Username must be bigger than 6 characters',
        (v) =>
          v !== this.currentUsername ||
          'Your new username cannot be your current username',
        (v) =>
          v.match(/[a-zA-Z1-9]/g)?.length === v?.length ||
          'No special characters or whitespaces allowed',
      ],
      messages: {
        incorrectPassword:
          'Your password is incorrect, please double check your password and try again',
      },
    };
  },
};
</script>
