<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="font-bold text-xl text-center mb-4">Home</h2>
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
