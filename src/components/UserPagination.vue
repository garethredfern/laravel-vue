<script setup>
import { useUser } from "@/stores/userStore";
import BasePagination from "@/components/BasePagination.vue";

const userStore = useUser();
</script>

<template>
  <BasePagination
    v-if="userStore.meta && userStore.meta.last_page > 1"
    path="users"
    :meta="userStore.meta"
    :links="userStore.links"
    :store-action="userStore.paginateUsers"
  />
</template>
