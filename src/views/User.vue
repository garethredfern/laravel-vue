<template>
  <div class="py-5">
    <div class="grid gap-10 md:grid-cols-3">
      <AuthUser />
      <AuthUserForm />
      <UpdatePassword />
    </div>
  </div>
</template>

<script>
import AuthUser from "@/components/AuthUser";
import AuthUserForm from "@/components/AuthUserForm";
import UpdatePassword from "@/components/UpdatePassword";

export default {
  name: "Dashboard",
  components: {
    AuthUser,
    AuthUserForm,
    UpdatePassword,
  },
};
</script>
