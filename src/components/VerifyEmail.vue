<template>
  <div>
    <form>
      <BaseBtn type="button" @click="resendVerification" text="Verify Email" />
    </form>
    <p v-if="message" class="mt-2 text-green-500 text-sm">
      {{ message }}
    </p>
    <p v-if="error" class="mt-2 text-red-500 text-sm">
      {{ error }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn";
import AuthService from "@/services/AuthService";

export default {
  name: "UpdatePassword",
  components: {
    BaseBtn,
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
    resendVerification() {
      this.error = null;
      this.message = null;
      const payload = {
        user: this.authUser.id,
      };
      AuthService.resendVerification(payload)
        .then(() => (this.message = "Verification email sent."))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>
