<script setup>
import { isAuthenticated } from '@/utils/supabase'
import ProfileHeader from './ProfileHeader.vue'
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps(['isWithAppBarNavIcon'])

const emit = defineEmits(['isDrawerVisible', 'theme'])

const { mobile } = useDisplay()
const theme = ref(localStorage.getItem('theme') ?? 'light')

const isLoggedIn = ref(false)

//  Toggle Theme
const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

// Get Authentication status from supabase
const getLoggedStatus = async () => {
  isLoggedIn.value = await authStore.isAuthenticated()
}

onMounted(() => {
  document.body.setAttribute('data-theme', theme.value)
  getLoggedStatus()
})
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar class="px-3" :color="theme === 'light' ? 'grey-lighten-5' : 'grey-darken-3'">
        <v-app-bar-nav-icon
          v-if="props.isWithAppBarNavIcon"
          icon="mdi-menu"
          :theme="theme"
          @click="emit('isDrawerVisible')"
        >
        </v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn
          class="me-2"
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
          slim
          @click="onToggleTheme"
        ></v-btn>

        <ProfileHeader v-if="isLoggedIn"></ProfileHeader>
      </v-app-bar>

      <slot name="navigation"></slot>

      <v-main>
        <slot name="content"></slot>
      </v-main>

      <v-footer :color="theme === 'light' ? 'grey-lighten-5' : 'grey-darken-3'" border app>
        Copyright © 2024 - SoppurtLink | All Rights Reserved
      </v-footer>
    </v-app>
  </v-responsive>
</template>
