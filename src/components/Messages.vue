<template>
  <div>
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !messages.length"
        key="loading"
      />
      <ul v-else>
        <li
          v-for="message in messages"
          :key="message.id"
          class="flex py-2 space-x-2 border-b"
        >
          <div>
            <img
              v-if="message.user.avatar"
              :src="message.user.avatar"
              class="w-10 h-10 rounded-full"
              alt=""
            />
            <AvatarIcon class="w-10 h-10 text-gray-400 rounded-full" v-else />
          </div>
          <div>
            <div class="flex space-x-2">
              <span class="font-bold">{{ message.user.name }}</span>
              <span class="text-gray-400">{{ message.createdAt }}</span>
            </div>
            <div class="text-gray-600">{{ message.body }}</div>
          </div>
        </li>
      </ul>
    </transition>
    <transition name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
    </transition>
    <transition name="fade">
      <BasePagination
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
