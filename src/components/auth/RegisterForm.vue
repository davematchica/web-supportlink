<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field label="Firstname" variant="outlined"></v-text-field>

    <v-text-field label="Lastname" variant="outlined"></v-text-field>

    <v-text-field label="Email" variant="outlined"></v-text-field>

    <v-text-field label="Password" type="password" variant="outlined"></v-text-field>

    <v-text-field label="Confirm Password" type="password" variant="outlined"></v-text-field>

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
