<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-2xl mx-auto text-center">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">Laravel Vue SPA</h1>
    <p class="text-gray-600 mb-8">
      A step by step guide on how to build a Laravel 11 API with a Vue 3 SPA to consume its data
      using Sanctum and Fortify.
    </p>
    <div class="space-x-4">
      <RouterLink
        to="/login"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </RouterLink>
      <RouterLink
        to="/register"
        class="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
      >
        Register
      </RouterLink>
    </div>
  </div>
</template>
