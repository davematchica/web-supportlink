<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import LoginForm from '@/components/auth/LoginForm.vue'

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>
<template>
  <AppLayout>
    <template #content>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="8" class="bg-surface-light h-screen" v-if="!mobile"></v-col>
          <v-col cols="12" md="4" :class="mobile ? '' : 'pt-16'">
            <v-card class="mx-auto" elevation="0" max-width="600">
              <v-card-title class="text-center">
                <v-img
                  class="mx-auto my-5"
                  src="/suplink-logo.png"
                  :width="mobile ? '75%' : '25%'"
                ></v-img>
                <h3 class="font-weight-black">Welcome to SupportLink</h3>
                <p>Login Form</p>
              </v-card-title>

              <v-card-text class="bg-surface-light pt-4">
                <LoginForm></LoginForm>

                <v-divider class="my-5"></v-divider>

                <h5 class="text-center">
                  Don't have Account?
                  <RouterLink class="text-primary" to="/register"
                    >Click here to Register</RouterLink
                  >
                </h5>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </AppLayout>
</template>
