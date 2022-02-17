<script setup>
import { ref } from "vue";
import { useAuth } from "@/stores/authStore";
import BaseBtn from "@/components/BaseBtn.vue";
import BaseInput from "@/components/BaseInput.vue";
import FlashMessage from "@/components/FlashMessage.vue";

const authStore = useAuth();
const email = ref(null);
const password = ref(null);
</script>

<template>
  <form @submit.prevent="authStore.login({ email, password })">
    <BaseInput
      type="email"
      label="Email"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="luke@jedi.com"
      required
      class="mb-4"
    />
    <BaseInput
      type="password"
      label="Password"
      name="password"
      v-model="password"
      class="mb-4"
      autocomplete
    />
    <div class="flex justify-between items-center">
      <BaseBtn type="submit" text="Login" />
      <RouterLink
        to="/forgot-password"
        class="hover:underline text-sm text-gray-400"
      >
        Forgot your password?
      </RouterLink>
    </div>
    <FlashMessage :error="authStore.authError" />
  </form>
</template>
