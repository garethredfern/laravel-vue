<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn.vue";
import AuthService from "@/services/AuthService";
import BaseInput from "@/components/BaseInput.vue";
import FlashMessage from "@/components/FlashMessage.vue";

const route = useRoute();

const password = ref(null);
const passwordConfirm = ref(null);
const authError = ref(null);
const message = ref(null);

async function resetPassword() {
  authError.value = null;
  message.value = null;
  const payload = {
    email: route.query.email,
    password: password.value,
    password_confirmation: passwordConfirm.value,
    token: route.params.token,
  };
  try {
    const response = await AuthService.resetPassword(payload);
    message.value = response.data.status;
  } catch (error) {
    authError.value = getError(error);
  }
}
</script>

<template>
  <form @submit.prevent="resetPassword">
    <BaseInput
      type="password"
      label="Password"
      name="password"
      v-model="password"
      required
      class="mb-2"
    />
    <BaseInput
      type="password"
      label="Confirm Password"
      name="password-confirm"
      v-model="passwordConfirm"
      class="mb-4"
    />
    <BaseBtn type="submit" text="Reset Password" />
    <FlashMessage :message="message" :errorMessage="authError" />
  </form>
</template>
