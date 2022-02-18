<script setup>
import UpdatePasswordForm from "@/components/UpdatePasswordForm.vue";
</script>

<template>
  <div class="p-5">
    <h2 class="mb-4 text-xl font-bold">User Details</h2>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <UpdatePasswordForm class="p-5 bg-white border rounded shadow" />
    </div>
  </div>
</template>
