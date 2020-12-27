<template>
  <div class="max-w-sm p-5">
    <h2 class="font-bold text-xl text-center mb-4">
      Resend Verification Email
    </h2>
    <form class="border p-5 rounded">
      <BaseBtn type="button" @click="resendVerification" text="Resend Email" />
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
  name: "UpdatePassword",
  components: {
    BaseBtn,
  },
  data() {
    return {
      error: null,
      message: null,
    };
  },
  methods: {
    resendVerification() {
      this.error = null;
      this.message = null;
      const payload = {
        user: 1,
      };
      AuthService.resendVerification(payload)
        .then(() => (this.message = "Verification email sent"))
        .catch((error) => (this.error = error));
    },
  },
};
</script>
