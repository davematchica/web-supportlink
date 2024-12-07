<script setup>
import { ref } from 'vue'

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field label="Firstname"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field label="Lastname"></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field label="Email" prepend-inner-icon="mdi-email-outline"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          label="Password"
          prepend-inner-icon="mdi-lock-outline"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          label="Confirm Password"
          prepend-inner-icon="mdi-lock-check-outline"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn
      class="gradient-btn mt-2"
      type="submit"
      color="primary"
      block
      prepend-icon="mdi-account-plus"
      >Register</v-btn
    >
  </v-form>
</template>

<style scoped>
.gradient-btn {
  background: linear-gradient(90deg, #ffd700, #ff69b4, #1e88e5); /* Yellow, Pink, Blue */
  color: white; /* Ensures text/icon is visible */
  border: none;
}

.gradient-btn:hover {
  filter: brightness(1.2); /* Brighten on hover */
}

.gradient-btn.v-btn {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Elevation effect */
}
</style>
