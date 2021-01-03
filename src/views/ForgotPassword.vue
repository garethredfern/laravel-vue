<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="mb-4 text-xl font-bold text-center">Forgot Password</h2>
    <form @submit.prevent="forgotPassword" class="p-5 border rounded">
      <div class="mb-4">
        <input
          type="email"
          v-model="email"
          class="border rounded px-2.5 py-1.5 w-full"
        />
      </div>
      <BaseBtn type="submit" text="Forgot Password" />
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
  name: "ForgotPassword",
  components: {
    BaseBtn,
    FlashMessage,
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
      this.error = null;
      this.message = null;
      const payload = {
        email: this.email,
      };
      AuthService.forgotPassword(payload)
        .then(() => (this.message = "Reset password email sent."))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>
