<template>
  <div>
    <transition name="fade">
      <img
        v-if="authUser.avatar"
        :src="authUser.avatar"
        class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
        alt=""
      />
    </transition>
    <ul>
      <li class="mb-1 font-bold">{{ authUser.name }}</li>
      <li>Email: {{ authUser.email }}</li>
      <li v-if="authUser.email_verified_at" class="text-gray-500">
        Emailed Verified
      </li>
    </ul>
    <VerifyEmail v-if="!authUser.email_verified_at" class="mt-4" />
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
