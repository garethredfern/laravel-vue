<script setup>
import { RouterView } from "vue-router";
import SiteFooter from "@/components/SiteFooter.vue";
</script>

<template>
  <div class="flex h-screen flex-col justify-between">
    <div class="mb-auto">
      <RouterView />
    </div>
    <SiteFooter />
  </div>
</template>
