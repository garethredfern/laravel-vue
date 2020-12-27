<template>
  <div class="max-w-sm p-5">
    <h2 class="font-bold text-xl text-center mb-4">User Details</h2>
    <div class="border p-5 rounded">
      <ul>
        <li class="font-bold mb-1">{{ authUser.name }}</li>
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
