<script setup>
import { useRouter } from "vue-router";
import { useUser } from "@/stores/userStore";
import { MailIcon } from "@heroicons/vue/solid";
import { UserCircleIcon } from "@heroicons/vue/solid";
import FlashMessage from "@/components/FlashMessage.vue";
import UserPagination from "@/components/UserPagination.vue";

const router = useRouter();
const userStore = useUser();

async function getUser(id) {
  await userStore.getUser(id);
  router.push({ name: "user", params: { id } });
}
</script>

<template>
  <div class="p-5">
    <h2 class="mb-4 text-xl font-bold">Users</h2>
    <transition name="fade" mode="out-in">
      <FlashMessage
        v-if="userStore.loading && !userStore.users.length"
        message="loading..."
      />
      <ul v-else>
        <li
          v-for="user in userStore.users"
          :key="user.id"
          class="flex items-center justify-between py-2 border-b"
        >
          <div class="inline-flex items-center space-x-2">
            <img
              v-if="user.avatar"
              :src="user.avatar"
              class="w-10 h-10 rounded-full"
              :alt="`${user.name} Avatar`"
            />
            <UserCircleIcon
              class="w-10 h-10 text-gray-400 rounded-full"
              v-else
            />
            <button @click="getUser(user.id)" class="text-gray-600">
              {{ user.name }}
            </button>
          </div>
          <a
            :href="`mailto:${user.email}`"
            :title="user.emailVerified ? 'Verified' : 'Not Verified'"
            class="inline-flex items-center space-x-2"
          >
            <span class="hidden sm:inline">{{ user.email }}</span>
            <MailIcon
              class="w-5 h-5"
              :class="user.emailVerified ? 'text-green-400' : 'text-gray-300'"
            />
          </a>
        </li>
      </ul>
    </transition>
    <transition name="fade">
      <FlashMessage v-if="userStore.error" :errorMessage="userStore.error" />
    </transition>
    <transition name="fade">
      <UserPagination v-if="userStore.meta && userStore.meta.last_page > 1" />
    </transition>
  </div>
</template>
