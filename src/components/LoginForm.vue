<template>
  <div class="max-w-sm">
    <form @submit.prevent="login" class="p-5 bg-white border rounded shadow">
      <div class="mb-2">
        <label for="email" class="text-sm text-gray-500">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="luke@jedi.com"
          autocomplete="email"
          class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="text-sm text-gray-500">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div class="flex justify-between">
        <BaseBtn type="submit" text="Login" />
        <router-link
          to="/forgot-password"
          class="text-sm text-blue-500 transition hover:text-blue-600"
          >Forgot your password?</router-link
        >
      </div>
    </form>
    <FlashMessage :message="message" :error="error" />
  </div>
</template>

<script>
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "LoginView",
  components: {
    BaseBtn,
    FlashMessage,
  },
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      AuthService.login(payload)
        .then(() => this.$router.push("/dashboard"))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>
