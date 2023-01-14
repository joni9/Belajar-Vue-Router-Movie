<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <div class="mx-auto my-5 max-w-7xl">
    <RouterView /><!-- meanmpilkan halaman -->
  </div>
  <Footer />
</template>

