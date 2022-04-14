<template>
  <v-container>
    <v-form v-model="valid">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <v-text-field
            v-model="currentPassword"
            :rules="passwordRules"
            :counter="30"
            label="Type your current password"
            required
            class="mb-4"
          ></v-text-field>
          <br />
          <v-text-field
            v-model="newPassword"
            :rules="newPasswordRules"
            :counter="30"
            label="Type your new password"
            required
            class="mb-4"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="confirmNewPassword"
            :rules="confirmPasswordRules"
            :counter="30"
            label="Confirm your new password"
            required
            class="mb-4"
            type="password"
          ></v-text-field>
          <v-btn :disabled="!valid" color="success" class="mr-4">
            Change Password
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
  name: 'ChangePassword',
  data() {
    return {
      valid: false,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length <= 30 || 'Password must be less than 30 characters',
      ],
      newPasswordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length <= 30 || 'Password must be less than 30 characters',
        (v) => {
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
          return (
            passwordRegex.test(v) ||
            'Your password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:'
          );
        },
      ],
      confirmPasswordRules: [
        (v) =>
          v === this.newPassword ||
          'Your input does not match your new password',
      ],
      messages: {
        incorrectPassword:
          'Your password is incorrect, please double check your password and try again',
      },
    };
  },
};
</script>
