<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="font-bold text-xl text-center mb-4">Forgot Password</h2>
    <form class="border p-5 rounded">
      <div class="mb-4">
        <input
          type="email"
          v-model="email"
          class="border rounded px-2.5 py-1.5 w-full"
        />
      </div>
      <BaseBtn type="button" @click="forgotPassword" text="Forgot Password" />
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
  name: "ForgotPassword",
  components: {
    BaseBtn,
  },
  data() {
    return {
      email: "luke@jedi.com",
      error: null,
      message: null,
    };
  },
  methods: {
    forgotPassword() {
      const payload = {
        email: this.email,
      };
      AuthService.forgotPassword(payload)
        .then(() => (this.message = "Reset password email sent."))
        .catch((error) => (this.error = error));
    },
  },
};
</script>
