<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "submit",
  },
  text: {
    type: String,
    default: "Submit",
  },
});
</script>

<template>
  <button
    :type="props.type"
    class="rounded border border-transparent bg-blue-400 px-2.5 py-1.5 text-center text-xs text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    {{ props.text }}
  </button>
</template>
