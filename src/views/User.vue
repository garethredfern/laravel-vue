<script setup>
import { useRoute } from "vue-router";
import { useUser } from "@/stores/userStore";
import UserForm from "@/components/UserForm.vue";
import UserDetails from "@/components/UserDetails.vue";
import FileUploadForm from "@/components/FileUploadForm.vue";
import UpdatePasswordForm from "@/components/UpdatePasswordForm.vue";

const route = useRoute();
const userStore = useUser();

function updateUser() {
  userStore.getUser(route.params.id);
}
// on created
updateUser();
</script>

<template>
  <div class="p-5">
    <h2 class="mb-4 text-xl font-bold">User Details</h2>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <UserDetails
        v-if="userStore.user"
        class="p-5 bg-white border rounded shadow"
      />
      <UserForm
        v-if="userStore.user"
        class="p-5 bg-white border rounded shadow"
      />
      <FileUploadForm
        label="Upload Avatar"
        :fileTypes="['image/*']"
        endpoint="/user/avatar"
        @fileUploaded="updateUser"
        class="p-5 bg-white border rounded shadow"
      />
      <UpdatePasswordForm class="p-5 bg-white border rounded shadow" />
    </div>
  </div>
</template>
