<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import Header from './components/Layouts/Header.vue'
</script>

<template>
  <div id = "main-wrapper">
    <Header/>
      <router-view></router-view>
    <Footer/>
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<style scoped>

</style>
