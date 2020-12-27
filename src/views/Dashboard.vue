<template>
  <div class="p-5">
    <h2 class="font-bold text-xl">Dashboard</h2>
    <div class="flex space-x-2">
      <CreateUser />
      <UpdatePassword />
      <VerifyEmail />
    </div>
  </div>
</template>

<script>
import CreateUser from "@/components/CreateUser";
import VerifyEmail from "@/components/VerifyEmail";
import UpdatePassword from "@/components/UpdatePassword";

export default {
  name: "Dashboard",
  components: {
    CreateUser,
    VerifyEmail,
    UpdatePassword,
  },
};
</script>
