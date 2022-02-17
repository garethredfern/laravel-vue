<script setup>
import { ref } from "vue";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn.vue";
import AuthService from "@/services/AuthService";
import BaseInput from "@/components/BaseInput.vue";
import FlashMessage from "@/components/FlashMessage.vue";

const email = ref(null);
const message = ref(null);
const authError = ref(null);

async function forgotPassword() {
  authError.value = null;
  message.value = null;
  const payload = {
    email: email.value,
  };
  try {
    const response = await AuthService.forgotPassword(payload);
    message.value = response.data.status;
  } catch (error) {
    authError.value = getError(error);
  }
}
</script>

<template>
  <form @submit.prevent="forgotPassword">
    <BaseInput
      type="email"
      label="Email"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="luke@jedi.com"
      class="mb-4"
    />
    <div class="flex justify-between">
      <BaseBtn type="submit" text="Submit" />
    </div>
    <FlashMessage :message="message" :error="authError" />
  </form>
</template>
