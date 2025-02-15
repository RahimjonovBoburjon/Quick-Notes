<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
}
</style>