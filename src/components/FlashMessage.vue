<template>
  <div>
    <transition-group name="fade">
      <p v-if="message" class="mt-2 text-sm text-green-500" key="message">
        {{ message }}
      </p>
      <p v-if="error" class="mt-2 text-sm text-red-500" key="error">
        {{ error }}
      </p>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "FlashMessage",
  props: {
    message: {
      type: [Object, String],
      default: null,
    },
    error: {
      type: [Error, String],
      default: null,
    },
  },
};
</script>
