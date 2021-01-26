<template>
  <div class="p-5 xl:px-0">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <AuthUser class="p-5 bg-white border rounded shadow" />
      <AuthUserForm class="p-5 bg-white border rounded shadow" />
      <UpdatePassword class="p-5 bg-white border rounded shadow" />
      <FileUpload
        label="Upload Avatar"
        :fileTypes="['image/*']"
        endpoint="/users/auth/avatar"
        @fileUploaded="updateUser"
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
  name: "UserView",
  components: {
    AuthUser,
    FileUpload,
    AuthUserForm,
    UpdatePassword,
  },
  methods: {
    updateUser() {
      this.$store.dispatch("auth/getAuthUser");
    },
  },
};
</script>
