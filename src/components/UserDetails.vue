<script setup>
import { useUser } from "@/stores/userStore";
import VerifyEmail from "@/components/VerifyEmail.vue";

const userStore = useUser();
</script>

<template>
  <div v-if="userStore.user">
    <transition name="fade">
      <img
        v-if="userStore.user.avatar"
        :src="userStore.user.avatar"
        class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
        alt=""
      />
    </transition>
    <ul>
      <li class="mb-1 font-bold">{{ userStore.user.name }}</li>
      <li>Email: {{ userStore.user.email }}</li>
      <li v-if="userStore.user.emailVerified" class="text-gray-500">
        Emailed Verified
      </li>
    </ul>
    <VerifyEmail v-if="!userStore.user.emailVerified" class="mt-4" />
  </div>
</template>
