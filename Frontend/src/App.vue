<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import Header from './components/Layouts/Header.vue'
</script>

<template>
  <div>
    <Header/>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
