<template>
  <div class="p-5">
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !users.length"
        key="loading"
      />
      <ul v-else class="mt-5">
        <li
          v-for="user in users"
          :key="user.id"
          class="flex items-center justify-between py-2 border-b"
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
    </transition>
    <transition name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
    </transition>
    <div class="py-4 text-center" v-if="meta && meta.last_page > 1">
      <p class="text-sm">
        Page {{ meta.current_page }} of {{ meta.last_page }}
      </p>
      <UserPagination />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store/index";
import FlashMessage from "@/components/FlashMessage";
import UserPagination from "@/components/UserPagination";

function getUsers(to, next) {
  const currentPage = parseInt(to.query.page) || 1;
  store.dispatch("user/getUsers", currentPage).then(() => {
    to.params.page = currentPage;
    next();
  });
}

export default {
  name: "UsersView",
  components: { FlashMessage, UserPagination },
  computed: {
    ...mapGetters("user", ["loading", "error", "users", "meta"]),
  },
  beforeRouteEnter(to, from, next) {
    getUsers(to, next);
  },
  beforeRouteUpdate(to, from, next) {
    getUsers(to, next);
  },
};
</script>
