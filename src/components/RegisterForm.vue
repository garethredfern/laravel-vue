<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn.vue";
import AuthService from "@/services/AuthService";
import BaseInput from "@/components/BaseInput.vue";
import FlashMessage from "@/components/FlashMessage.vue";

const router = useRouter();

const name = ref(null);
const email = ref(null);
const password = ref(null);
const passwordConfirm = ref(null);
const authError = ref(null);

async function registerUser() {
  authError.value = null;
  const payload = {
    name: name.value,
    email: email.value,
    password: password.value,
    password_confirmation: passwordConfirm.value,
  };
  try {
    await AuthService.registerUser(payload);
    router.push("/dashboard");
  } catch (error) {
    authError.value = getError(error);
  }
}
</script>

<template>
  <form @submit.prevent="registerUser">
    <BaseInput
      type="text"
      label="Name"
      name="name"
      v-model="name"
      placeholder="Luke Skywalker"
      required
      class="mb-2"
    />
    <BaseInput
      type="email"
      label="Email"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="luke@jedi.com"
      required
      class="mb-2"
    />
    <BaseInput
      type="password"
      label="Password"
      name="password"
      v-model="password"
      class="mb-2"
    />
    <BaseInput
      type="password"
      label="Confirm Password"
      name="password-confirm"
      v-model="passwordConfirm"
      class="mb-4"
    />
    <BaseBtn type="submit" text="Register" />
    <FlashMessage :error="authError" />
  </form>
</template>
