<script setup>
import { ref } from "vue";
import { getError } from "@/utils/helpers";
import { useAuth } from "@/stores/authStore";
import BaseBtn from "@/components/BaseBtn.vue";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage.vue";

const authStore = useAuth();

const authError = ref(null);
const message = ref(null);

async function sendVerification() {
  authError.value = null;
  message.value = null;
  const payload = {
    user: authStore.user.id,
  };
  try {
    const response = await AuthService.sendVerification(payload);
    message.value = response.data.status;
  } catch (error) {
    authError.value = getError(error);
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="sendVerification">
      <BaseBtn type="submit" text="Verify Email" />
    </form>
    <FlashMessage :message="message" :error="authError" />
  </div>
</template>
