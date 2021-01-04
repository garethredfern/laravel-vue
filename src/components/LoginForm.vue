<template>
  <div class="max-w-sm p-5 m-auto">
    <form @submit.prevent="login" class="p-5 border rounded">
      <div class="mb-2">
        <label for="email" class="text-gray-500">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="luke@jedi.com"
          class="border rounded px-2.5 py-1.5 w-full"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="text-gray-500">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="border rounded px-2.5 py-1.5 w-full"
        />
      </div>
      <div class="flex justify-between">
        <BaseBtn type="submit" text="Login" />
        <router-link to="/forgot-password" class="text-gray-500"
          >Forgot Password</router-link
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
