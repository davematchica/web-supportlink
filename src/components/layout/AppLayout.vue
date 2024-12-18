<script setup>
import { useAuthUserStore } from '@/stores/authUser'
import TopProfileNavigation from './navigation/TopProfileNavigation.vue'
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import ProfileHeader from './ProfileHeader.vue'
import { useAuthUserStore } from '@/stores/authUser' // Import the auth store

// Props and emits
const props = defineProps(['isWithAppBarNavIcon'])
const emit = defineEmits(['isDrawerVisible', 'theme'])

// Display helper
const { mobile } = useDisplay()

// Theme management
const theme = ref(localStorage.getItem('theme') ?? 'light')

// Authentication state
const authStore = useAuthUserStore() // Initialize auth store
const isLoggedIn = ref(false)

// Toggle theme
const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  document.body.setAttribute('data-theme', theme.value) // Update body attribute
}

// Get authentication status
const getLoggedStatus = async () => {
  try {
    isLoggedIn.value = await authStore.checkAuth() // Use checkAuth from auth store
  } catch (error) {
    console.error('Error checking auth status:', error)
  }
}

// On mounted lifecycle
onMounted(() => {
  document.body.setAttribute('data-theme', theme.value) // Set initial theme
  getLoggedStatus() // Check auth status on mount
})
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <!-- App bar -->
      <v-app-bar class="px-3" :color="theme === 'light' ? 'grey-lighten-5' : 'grey-darken-3'">
        <!-- Navigation icon -->
        <v-app-bar-nav-icon
          v-if="props.isWithAppBarNavIcon"
          icon="mdi-menu"
          :theme="theme"
          @click="emit('isDrawerVisible')"
        ></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <!-- Theme toggle button -->
        <v-btn
          class="me-2"
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
          slim
          @click="onToggleTheme"
        ></v-btn>

        <!-- Profile header (visible if logged in) -->
        <ProfileHeader v-if="isLoggedIn" />
      </v-app-bar>

      <!-- Navigation slot -->
      <slot name="navigation"></slot>

      <!-- Main content -->
      <v-main>
        <slot name="content"></slot>
      </v-main>

      <!-- Footer -->
      <v-footer :color="theme === 'light' ? 'grey-lighten-5' : 'grey-darken-3'" border app>
        Copyright © 2024 - SupportLink | All Rights Reserved
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<!-- <script setup>
import { isAuthenticated } from '@/utils/supabase'
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps(['isWithAppBarNavIcon'])

const emit = defineEmits(['isDrawerVisible', 'theme'])

// Use Pinia Store
const authStore = useAuthUserStore()

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

        <TopProfileNavigation v-if="isLoggedIn"></TopProfileNavigation>
      </v-app-bar>

      <slot name="navigation"></slot>

      <v-main>
        <slot name="content"></slot>
      </v-main>

      <v-footer :color="theme === 'light' ? 'grey-lighten-5' : 'grey-darken-3'" border app>
        <v-container>
          <v-row justify="space-between">
            <!-- Left-aligned text -->
            <v-col cols="12" sm="6" class="text-center text-sm-start">
              <span>Copyright © 2024 - SoppurtLink | All Rights Reserved</span>
            </v-col>

            <!-- Right-aligned links in a single line -->
            <v-col cols="12" sm="6" class="text-center text-sm-end">
              <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
              <span class="footer-divider mx-2">|</span>
              <a href="/terms-of-service" class="footer-link">Terms of Service</a>
              <span class="footer-divider mx-2">|</span>
              <a href="/faqs" class="footer-link">FAQs</a>
              <span class="footer-divider mx-2">|</span>
              <a href="/feedback" class="footer-link">Feedback</a>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-app>
  </v-responsive>
</template>
