<template>
  <div class="p-5 xl:px-0">
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !messages.length"
        key="loading"
      />
      <ul v-else class="mt-5">
        <li
          v-for="message in messages"
          :key="message.id"
          class="flex items-center justify-between py-2 space-x-16 border-b"
        >
          <div class="inline-flex items-center space-x-2">
            <img
              v-if="message.user.avatar"
              :src="message.user.avatar"
              class="w-10 h-10 rounded-full"
              alt=""
            />
            <AvatarIcon class="w-10 h-10 text-gray-400 rounded-full" v-else />
            {{ message.user.name }}
          </div>
          <div class="text-gray-600">
            {{ message.body }}
          </div>
        </li>
      </ul>
    </transition>
    <transition name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
    </transition>
    <transition name="fade">
      <BasePagination
        path="messages"
        :meta="meta"
        :links="links"
        action="message/paginateMessages"
        v-if="meta && meta.last_page > 1"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";
import AvatarIcon from "@/components/icons/AvatarIcon";
import BasePagination from "@/components/BasePagination";

export default {
  name: "Messages",
  components: { FlashMessage, BasePagination, AvatarIcon },
  computed: {
    ...mapGetters("message", ["loading", "error", "messages", "meta", "links"]),
  },
  created() {
    const currentPage = 1;
    this.$store.dispatch("message/getMessages", currentPage);
  },
};
</script>
