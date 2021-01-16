<template>
  <div class="flex justify-center">
    <button
      rel="first"
      type="button"
      @click="firstPage"
      v-if="links.prev"
      class="px-4 py-2 m-1 text-sm text-pink-400 hover:text-pink-500"
    >
      First
    </button>

    <button
      rel="prev"
      type="button"
      @click="prevPage"
      :class="{ 'rounded-r': !links.next }"
      v-if="links.prev"
      class="px-4 py-2 m-1 text-sm text-pink-400 hover:text-pink-500"
    >
      Previous
    </button>

    <button
      rel="next"
      type="button"
      @click="nextPage"
      :class="{ 'rounded-l': !links.prev }"
      v-if="links.next"
      class="px-4 py-2 m-1 text-sm text-pink-400 hover:text-pink-500"
    >
      Next
    </button>

    <button
      rel="last"
      type="button"
      @click="lastPage"
      v-if="links.next"
      class="px-4 py-2 m-1 text-sm text-pink-400 hover:text-pink-500"
    >
      Last
    </button>
  </div>
</template>

<script>
export default {
  props: {
    links: Object,
  },
  methods: {
    firstPage() {
      this.$emit("firstPage");
    },
    prevPage() {
      this.$emit("prevPage");
    },
    nextPage() {
      this.$emit("nextPage");
    },
    lastPage() {
      this.$emit("lastPage");
    },
  },
};
</script>
