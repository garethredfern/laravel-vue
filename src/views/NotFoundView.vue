<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-md mx-auto text-center">
    <h1 class="text-6xl font-bold text-gray-300 mb-4">404</h1>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
    <p class="text-gray-600 mb-8">
      Sorry, the page you're looking for doesn't exist or has been moved.
    </p>
    <RouterLink
      to="/"
      class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Go Home
    </RouterLink>
  </div>
</template>
