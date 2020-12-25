<template>
  <div>
    <h2 class="font-bold text-xl">Login Page</h2>
    <div class="grid grid-cols-2">
      <button type="button" @click="login" class="w-full">Login</button>
      <button type="button" @click="forgotPassword" class="w-full">
        Forgot Password
      </button>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: "Login",
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
    async forgotPassword() {
      try {
        await AuthService.forgotPassword();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
