<template>
  <div id="app">
    <header>
      <nav class="container mx-auto">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main class="container mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
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
