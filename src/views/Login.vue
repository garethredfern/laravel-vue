<script setup>
import LoginForm from "@/components/LoginForm.vue";
</script>

<template>
  <div class="m-auto max-w-sm p-5">
    <h2 class="mb-4 text-center text-xl font-bold">Login</h2>
    <LoginForm class="rounded border bg-white p-5 shadow" />
    <p class="mt-2 text-center text-gray-500">
      <RouterLink
        to="/register"
        class="text-pink-500 transition hover:text-pink-600 hover:underline text-sm"
        >Register for an account</RouterLink
      >
    </p>
  </div>
</template>
