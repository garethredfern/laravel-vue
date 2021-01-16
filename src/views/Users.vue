<template>
  <div class="p-5">
    <ul v-if="!loading && !error" class="mt-5">
      <li
        v-for="user in users"
        :key="user.id"
        class="flex items-center justify-between pb-2 border-b"
      >
        <div class="flex items-center">
          <img
            v-if="user.avatar"
            :src="user.avatar"
            class="w-12 h-12 mr-2 rounded-full"
            alt=""
          />
          <span class="mr-2 text-gray-600">{{ user.name }}</span>
        </div>
        <span>{{ user.email }}</span>
      </li>
    </ul>
    <transition-group name="fade" mode="out-in">
      <FlashMessage :error="error" v-if="error" key="error" />
      <FlashMessage message="loading..." v-if="loading" key="loading" />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";

export default {
  components: { FlashMessage },
  name: "UsersView",
  computed: {
    ...mapGetters("user", ["loading", "error", "users"]),
  },
  created() {
    this.$store.dispatch("user/getUsers");
  },
};
</script>
