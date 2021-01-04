<template>
  <div class="max-w-sm">
    <h2 class="mb-2 text-lg font-bold text-center">User Details</h2>
    <div class="p-5 bg-white border rounded shadow">
      <ul>
        <li class="mb-1 font-bold">{{ authUser.name }}</li>
        <li>Email: {{ authUser.email }}</li>
        <li v-if="authUser.email_verified_at" class="text-gray-500">
          Emailed Verified
        </li>
      </ul>
      <VerifyEmail v-if="!authUser.email_verified_at" class="mt-4" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VerifyEmail from "@/components/VerifyEmail";

export default {
  name: "AuthUser",
  components: {
    VerifyEmail,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>
