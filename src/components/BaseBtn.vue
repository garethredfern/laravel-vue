<template>
  <button
    :type="type"
    v-on="$listeners"
    class="px-2.5 py-1.5 border border-transparent text-xs rounded shadow-sm text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center transition"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {
    type: {
      type: String,
      default: "submit",
    },
    text: {
      type: String,
      default: "Submit",
    },
  },
};
</script>
