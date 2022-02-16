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

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
