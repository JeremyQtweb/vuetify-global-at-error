<template>
  <v-app :theme="theme">
    <v-app-bar title="Application">
      <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-spacer></v-spacer>
      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        @click="onClick"
      ></v-btn></v-app-bar>
    <v-navigation-drawer></v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const theme = ref('light')
  function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>