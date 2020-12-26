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
      <BaseBtn type="button" @click="login" text="Login" />
      <router-link to="/forgot-password" class="text-gray-500"
        >Forgot Password</router-link
      >
    </div>
  </form>
</template>

<script>
import BaseBtn from "@/components/BaseBtn";

export default {
  name: "LoginFom",
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
