<template>
  <div>
    <form @submit.prevent="sendVerification">
      <BaseBtn type="submit" text="Verify Email" />
    </form>
    <FlashMessage :message="message" :error="error" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "UpdatePassword",
  components: {
    BaseBtn,
    FlashMessage,
  },
  data() {
    return {
      error: null,
      message: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    sendVerification() {
      this.error = null;
      this.message = null;
      const payload = {
        user: this.authUser.id,
      };
      AuthService.sendVerification(payload)
        .then(() => (this.message = "Verification email sent."))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>
