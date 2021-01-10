<template>
  <form @submit.prevent="updatePassword">
    <div class="mb-2">
      <label for="password" class="text-sm text-gray-500"
        >Current Password</label
      >
      <input
        type="password"
        id="current-password"
        v-model="currentPassword"
        class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-2">
      <label for="password" class="text-sm text-gray-500">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="password-confirm" class="text-sm text-gray-500"
        >Confirm Password</label
      >
      <input
        type="password"
        id="password-confirm"
        v-model="passwordConfirm"
        class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <BaseBtn type="submit" text="Update" />
    <FlashMessage :message="message" :error="error" />
  </form>
</template>

<script>
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "UpdatePassword",
  components: {
    BaseBtn,
    FlashMessage,
  },
  data() {
    return {
      currentPassword: null,
      password: null,
      passwordConfirm: null,
      error: null,
      message: null,
    };
  },
  methods: {
    updatePassword() {
      this.error = null;
      this.message = null;
      const payload = {
        current_password: this.currentPassword,
        password: this.password,
        password_confirmation: this.passwordConfirm,
      };
      AuthService.updatePassword(payload)
        .then(() => (this.message = "Password updated."))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>
