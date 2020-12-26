<template>
  <form class="border p-5 rounded">
    <div class="mb-2">
      <input
        type="email"
        v-model="email"
        class="border rounded px-2.5 py-1.5 w-full"
      />
    </div>
    <div class="mb-4">
      <input
        type="password"
        v-model="password"
        class="border rounded px-2.5 py-1.5 w-full"
      />
    </div>
    <div class="flex justify-between">
      <button type="button" @click="login" :class="btnStyles">Login</button>
      <button type="button" @click="forgotPassword" :class="btnStyles">
        Forgot Password
      </button>
    </div>
  </form>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: "LoginFom",
  data() {
    return {
      email: "luke@jedi.com",
      password: "password",
      error: null,
    };
  },
  computed: {
    btnStyles() {
      return "px-2.5 py-1.5 border border-transparent text-xs rounded shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center";
    },
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
