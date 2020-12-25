<template>
  <button type="button" @click="logout">Logout</button>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>
