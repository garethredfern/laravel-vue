<template>
  <div class="max-w-sm p-5">
    <h2 class="mb-4 text-xl font-bold text-center">Register</h2>
    <form class="p-5 border rounded">
      <div class="mb-2">
        <label for="name" class="text-gray-500">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          class="border rounded px-2.5 py-1.5 w-full"
        />
      </div>
      <div class="mb-2">
        <label for="email" class="text-gray-500">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="border rounded px-2.5 py-1.5 w-full"
        />
      </div>
      <div class="mb-2">
        <label for="password" class="text-gray-500">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="border rounded px-2.5 py-1.5 w-full"
        />
      </div>
      <div class="mb-4">
        <label for="password-confirm" class="text-gray-500"
          >Confirm Password</label
        >
        <input
          type="password"
          id="password-confirm"
          v-model="passwordConfirm"
          class="border rounded px-2.5 py-1.5 w-full"
        />
      </div>
      <BaseBtn type="button" @click="registerUser" text="Register" />
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
  name: "RegisterUser",
  components: {
    BaseBtn,
    FlashMessage,
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      passwordConfirm: null,
      error: null,
      message: null,
    };
  },
  methods: {
    registerUser() {
      this.error = null;
      this.message = null;
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirm,
      };
      AuthService.registerUser(payload)
        .then(() => this.$router.push("/dashboard"))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>
