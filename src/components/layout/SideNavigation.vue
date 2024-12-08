<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigationItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
  { title: 'Profile', icon: 'mdi-account', route: '/profile' },
  { title: 'Settings', icon: 'mdi-cog', route: '/settings' },
]

const logout = () => {
  alert('Logging out...')
  router.push('/')
}
</script>

<template>
  <v-navigation-drawer
    app
    permanent
    :color="theme === 'light' ? 'grey-lighten-5' : 'grey-darken-4'"
    width="250"
  >
    <!-- Navigation List -->
    <v-list>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        link
        :to="item.route"
        @click="drawer = false"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
