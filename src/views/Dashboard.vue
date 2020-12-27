<template>
  <div class="p-5">
    <h2 class="font-bold text-xl">Dashboard</h2>
    <div class="flex space-x-2">
      <AuthUser />
      <UpdatePassword />
      <VerifyEmail />
    </div>
  </div>
</template>

<script>
import AuthUser from "@/components/AuthUser";
import VerifyEmail from "@/components/VerifyEmail";
import UpdatePassword from "@/components/UpdatePassword";

export default {
  name: "Dashboard",
  components: {
    AuthUser,
    VerifyEmail,
    UpdatePassword,
  },
};
</script>
