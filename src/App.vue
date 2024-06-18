<script setup>
import Navbar from '@/components/Navbar.vue';
</script>
<template>
  <main class="h-screen overflow-hidden  w-screen  relative bg-main text-white" >
    <Navbar/>
    <RouterView />
  </main>
</template>