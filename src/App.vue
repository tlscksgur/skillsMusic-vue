<script setup>
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppWrapper from './components/AppWrapper.vue';
import { musicData } from './store';

</script>

<template>
  <div id="wrapper">
      <AppHeader />
      <AppSidebar />
      <AppWrapper />
    </div>
</template>

<style scoped>

</style>
