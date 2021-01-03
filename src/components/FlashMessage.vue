<template>
  <div>
    <p v-if="message" class="mt-2 text-sm text-green-500">
      {{ message }}
    </p>
    <p v-if="error" class="mt-2 text-sm text-red-500">
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
