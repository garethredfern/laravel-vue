<script setup>
import { RouterView } from "vue-router";
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
</script>

<template>
  <div class="flex h-screen flex-col justify-between">
    <SiteHeader />
    <main class="mb-auto">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
