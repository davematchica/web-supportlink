<script setup>
import { ref } from 'vue'

const theme = ref(localStorage.getItem('theme') ?? 'light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.getItem('theme', theme.value)
}
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar class="px-3" :color="theme === 'light' ? 'grey-lighten-5' : 'grey-darken-3'">
        <v-spacer></v-spacer>

        <v-btn
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <slot name="content"></slot>
        </v-container>
      </v-main>

      <!-- footer start -->

      <v-footer
        class="font-weight-bold"
        :color="theme === 'light' ? 'grey-lighten-5' : 'grey-darken-3'"
        border
        app
      >
        2024 - Copyright SoppurtLink
      </v-footer>

      <!-- footer end -->
    </v-app>
  </v-responsive>
</template>
