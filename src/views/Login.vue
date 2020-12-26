<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="font-bold text-xl text-center mb-4">Login</h2>
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
        <BaseBtn type="button" @click="login" text="Login" />
        <router-link to="/forgot-password" class="text-gray-500"
          >Forgot Password</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import BaseBtn from "@/components/BaseBtn";

export default {
  name: "LoginView",
  components: {
    BaseBtn,
  },
  data() {
    return {
      email: "luke@jedi.com",
      password: "password",
      error: null,
    };
  },
  methods: {
    login() {
      const LoginDetails = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("auth/login", LoginDetails)
        .then(() => this.$router.push("/dashboard"))
        .catch((error) => (this.error = error));
    },
  },
};
</script>
