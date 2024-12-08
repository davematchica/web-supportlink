<script setup>
import { ref } from 'vue'

// Mock user data (replace this with real data if needed)
const user = ref({
  initials: 'JD',
  fullName: 'John Doe',
  email: 'john.doe@doe.com',
})

// Logout function
const onLogout = () => {
  alert('Logged out!')
  // Add actual logout functionality here
}
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-menu min-width="200px" rounded offset-y>
        <!-- Activator -->
        <template #activator="{ props }">
          <v-btn v-bind="props" class="d-flex align-center" icon>
            <v-avatar color="brown" size="large">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>

        <!-- Dropdown Menu -->
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <!-- Profile Avatar -->
              <v-avatar color="brown" size="large" class="mx-auto mb-3">
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>

              <!-- User Info -->
              <h3 class="font-weight-medium">{{ user.fullName }}</h3>
              <p class="text-caption mt-1">{{ user.email }}</p>

              <!-- Actions -->
              <v-divider class="my-3"></v-divider>
              <v-btn variant="text" rounded @click="alert('Account Settings Clicked!')">
                Account Settings
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn variant="text" rounded color="error" @click="onLogout"> Logout </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<style scoped>
.text-caption {
  color: gray;
}
</style>
