<template>
  <div class="p-5">
    <h2 class="font-bold text-xl">Dashboard</h2>
    <div class="flex space-x-2">
      <UpdatePassword />
      <VerifyEmail />
    </div>
  </div>
</template>

<script>
import VerifyEmail from "@/components/VerifyEmail";
import UpdatePassword from "@/components/UpdatePassword";

export default {
  name: "Dashboard",
  components: {
    VerifyEmail,
    UpdatePassword,
  },
};
</script>
