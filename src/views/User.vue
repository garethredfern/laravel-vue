<template>
  <div class="py-5">
    <div class="grid gap-10 md:grid-cols-3">
      <AuthUser class="p-5 bg-white border rounded shadow" />
      <AuthUserForm class="p-5 bg-white border rounded shadow" />
      <UpdatePassword class="p-5 bg-white border rounded shadow" />
      <FileUpload
        label="Upload Avatar"
        :fileTypes="['image/*']"
        endpoint="/users/auth/avatar"
        class="p-5 bg-white border rounded shadow"
      />
    </div>
  </div>
</template>

<script>
import AuthUser from "@/components/AuthUser";
import FileUpload from "@/components/FileUpload";
import AuthUserForm from "@/components/AuthUserForm";
import UpdatePassword from "@/components/UpdatePassword";

export default {
  name: "Dashboard",
  components: {
    AuthUser,
    FileUpload,
    AuthUserForm,
    UpdatePassword,
  },
};
</script>
