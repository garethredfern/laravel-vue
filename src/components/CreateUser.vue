<template>
  <div class="max-w-sm p-5">
    <h2 class="font-bold text-xl text-center mb-4">Create User</h2>
    <form class="border p-5 rounded">
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
      <BaseBtn type="button" @click="createUser" text="Create User" />
    </form>
    <p v-if="message" class="mt-2 text-green-500 text-sm">
      {{ message }}
    </p>
    <p v-if="error" class="mt-2 text-red-500 text-sm">
      {{ error }}
    </p>
  </div>
</template>

<script>
import BaseBtn from "@/components/BaseBtn";
import AuthService from "@/services/AuthService";

export default {
  name: "CreateUser",
  components: {
    BaseBtn,
  },
  data() {
    return {
      email: null,
      password: null,
      passwordConfirm: null,
      error: null,
      message: null,
    };
  },
  methods: {
    createUser() {
      this.error = null;
      this.message = null;
      const payload = {
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirm,
      };
      AuthService.createUser(payload)
        .then(() => (this.message = "User created"))
        .catch((error) => (this.error = error));
    },
  },
};
</script>
