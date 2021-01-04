<template>
  <div class="py-5">
    <div class="grid gap-10 md:grid-cols-3">
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
