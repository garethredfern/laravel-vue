<template>
  <div id="app">
    <header class="p-5 bg-blue-100">
      <nav class="container mx-auto flex justify-between items-center">
        <router-link to="/">Home</router-link>
        <div class="flex space-x-4">
          <router-link to="/dashboard">Dashboard</router-link>
          <Logout />
        </div>
      </nav>
    </header>
    <main class="container mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import Logout from "@/components/Logout";

export default {
  name: "app",
  components: {
    Logout,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700|Material+Icons");

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
