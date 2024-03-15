<template>
  <v-app>
    <v-navigation-drawer expand-on-hover rail>
      <NavigationComponent />
    </v-navigation-drawer>
    <v-app-bar :elevation="2">
      <template v-slot:append>
        <AppBarComponents />

      </template>
      <v-app-bar-title>DASHBOARD</v-app-bar-title>
      

    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBarComponents from './components/AppBar/AppBarComponents.vue';




//
</script>./components/AppBar/AppBarComponents.vue
