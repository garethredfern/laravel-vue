<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="mb-4 text-xl font-bold text-center">Forgot Password</h2>
    <form
      @submit.prevent="forgotPassword"
      class="p-5 bg-white border rounded shadow"
    >
      <BaseInput
        type="email"
        label="Email"
        name="email"
        v-model="email"
        autocomplete="email"
        placeholder="luke@jedi.com"
        class="mb-4"
      />
      <BaseBtn type="submit" text="Send" />
    </form>
    <FlashMessage :message="message" :error="error" />
  </div>
</template>

<script>
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn";
import BaseInput from "@/components/BaseInput";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "ForgotPassword",
  components: {
    BaseBtn,
    BaseInput,
    FlashMessage,
  },
  data() {
    return {
      email: null,
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
