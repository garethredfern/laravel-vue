<template>
  <div>
    <p v-if="message" class="mt-2 text-green-500 text-sm">
      {{ message }}
    </p>
    <p v-if="error" class="mt-2 text-red-500 text-sm">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FlashMessage",
  props: {
    message: {
      type: String,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
  },
};
</script>
