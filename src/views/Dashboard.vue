<template>
  <div class="p-5">
    <div class="flex space-x-2">
      <AuthUser />
      <UpdatePassword />
    </div>
  </div>
</template>

<script>
import AuthUser from "@/components/AuthUser";
import UpdatePassword from "@/components/UpdatePassword";

export default {
  name: "Dashboard",
  components: {
    AuthUser,
    UpdatePassword,
  },
};
</script>
