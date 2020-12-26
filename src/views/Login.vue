<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="font-bold text-xl text-center mb-4">Login</h2>
    <Login />
  </div>
</template>

<script>
import Login from "@/components/Login";

export default {
  name: "LoginView",
  components: {
    Login,
  },
};
</script>
