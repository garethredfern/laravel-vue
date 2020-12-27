<template>
  <div class="max-w-sm p-5">
    <h2 class="font-bold text-xl text-center mb-4">User Details</h2>
    <ul class="border p-5 rounded">
      <li>Name: {{ authUser.name }}</li>
      <li>Email: {{ authUser.email }}</li>
      <li v-if="authUser.email_verified_at">Emailed Verified</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AuthUser",
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>
