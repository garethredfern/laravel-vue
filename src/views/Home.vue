<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="mb-4 text-xl font-bold text-center">Home</h2>
    <RegisterUser />
  </div>
</template>

<script>
import RegisterUser from "@/components/RegisterUser";

export default {
  name: "Home",
  components: {
    RegisterUser,
  },
};
</script>
