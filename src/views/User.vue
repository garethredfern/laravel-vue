<script setup>
import { useRoute } from "vue-router";
import { useUser } from "@/stores/userStore";
import UserDetails from "@/components/UserDetails.vue";
import UpdatePasswordForm from "@/components/UpdatePasswordForm.vue";

const route = useRoute();
const userStore = useUser();
userStore.getUser(route.params.id);
</script>

<template>
  <div class="p-5">
    <h2 class="mb-4 text-xl font-bold">User Details</h2>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <UserDetails class="p-5 bg-white border rounded shadow" />
      <UpdatePasswordForm class="p-5 bg-white border rounded shadow" />
    </div>
  </div>
</template>
