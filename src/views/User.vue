<template>
  <div class="py-5">
    <div class="grid gap-10 md:grid-cols-3">
      <AuthUser class="p-5 bg-white border rounded shadow" />
      <AuthUserForm class="p-5 bg-white border rounded shadow" />
      <UpdatePassword class="p-5 bg-white border rounded shadow" />
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
