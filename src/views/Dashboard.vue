<template>
  <div class="p-5 xl:px-0">
    <div class="grid gap-10 md:grid-cols-3">
      <article
        class="flex items-center justify-between p-5 bg-white border rounded shadow"
      >
        <div class="inline-flex items-center space-x-2">
          <img
            v-if="authUser.avatar"
            :src="authUser.avatar"
            class="w-10 h-10 rounded-farticlel"
            alt=""
          />
          <AvatarIcon class="w-10 h-10 text-gray-400 rounded-full" v-else />
          <span>{{ authUser.name }}</span>
        </div>
        <router-link
          to="/user"
          class="px-4 py-2 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"
          >View Profile</router-link
        >
      </article>
    </div>
    <footer class="py-5">
      <p class="text-gray-400">
        Full documentation for how this application is built can be found at
        <a href="https://laravelvuespa.com/" class="base-link"
          >laravelvuespa.com</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarIcon from "@/components/icons/AvatarIcon";

export default {
  name: "Dashboard",
  components: {
    AvatarIcon,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>
