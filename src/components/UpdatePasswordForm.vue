<script setup>
import { ref } from "vue";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn.vue";
import UserService from "@/services/UserService";
import BaseInput from "@/components/BaseInput.vue";
import FlashMessage from "@/components/FlashMessage.vue";

const currentPassword = ref(null);
const password = ref(null);
const passwordConfirm = ref(null);
const authError = ref(null);
const message = ref(null);

function clearForm() {
  currentPassword.value = null;
  password.value = null;
  passwordConfirm.value = null;
}

async function updatePassword() {
  authError.value = null;
  message.value = null;
  const payload = {
    current_password: currentPassword.value,
    password: password.value,
    password_confirmation: passwordConfirm.value,
  };
  try {
    const response = await UserService.updatePassword(payload);
    message.value = response.data.message;
    clearForm();
  } catch (error) {
    authError.value = getError(error);
  }
}
</script>

<template>
  <form @submit.prevent="updatePassword">
    <BaseInput
      type="password"
      label="Current Password"
      name="current-password"
      v-model="currentPassword"
      required
      class="mb-2"
    />
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
    <BaseBtn type="submit" text="Update" />
    <FlashMessage :message="message" :errorMessage="authError" />
  </form>
</template>
