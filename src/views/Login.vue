<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="mb-4 text-xl font-bold text-center">Login</h2>
    <LoginForm />
    <p class="mt-2 text-center text-gray-500">
      <router-link to="/register" class="text-blue-500">Register</router-link>
      for an account.
    </p>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
