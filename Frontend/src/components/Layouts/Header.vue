<template>
  <header class="bg-white shadow-md w-full">
    <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold text-blue-600">
        E-Shop
      </router-link>

      <!-- Search Bar -->
      <div class="hidden md:flex items-center border border-gray-300 rounded-lg px-3 py-2 w-1/3">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search products..." 
          class="w-full outline-none text-gray-600"
        />
        <button @click="searchProducts" class="text-gray-500 hover:text-blue-600">
          🔍
        </button>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center space-x-6">
        <router-link to="/" class="hover:text-blue-600">Home</router-link>
        <router-link to="/shop" class="hover:text-blue-600">Shop</router-link>
        <router-link to="/about" class="hover:text-blue-600">About</router-link>
        <router-link to="/contact" class="hover:text-blue-600">Contact</router-link>
      </nav>

      <!-- Icons (Cart & Menu) -->
      <div class="flex items-center space-x-4">
        <router-link to="/cart" class="relative">
          🛒
          <span 
            v-if="cartItemCount > 0" 
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
            {{ cartItemCount }}
          </span>
        </router-link>

        <!-- Mobile Menu Toggle -->
        <button @click="toggleMenu" class="md:hidden text-2xl">☰</button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white border-t p-4 space-y-3">
      <router-link to="/" class="block" @click="toggleMenu">Home</router-link>
      <router-link to="/shop" class="block" @click="toggleMenu">Shop</router-link>
      <router-link to="/about" class="block" @click="toggleMenu">About</router-link>
      <router-link to="/contact" class="block" @click="toggleMenu">Contact</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const cartItemCount = ref(3); // Example cart count, should come from store
const isMenuOpen = ref(false);
const router = useRouter();

const searchProducts = () => {
  if (searchQuery.value) {
    router.push(`/search?q=${searchQuery.value}`);
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
