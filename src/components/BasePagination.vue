<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  storeAction: {
    type: Function,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  meta: {
    type: Object,
    required: true,
  },
  links: {
    type: Object,
    required: true,
  },
});

const btnStyles =
  "px-2.5 py-1.5 m-1 text-sm text-pink-400 border hover:text-pink-500";

async function firstPage() {
  await props.storeAction(props.links.first);
  router.push({
    path: props.path,
    query: { page: 1 },
  });
}
async function prevPage() {
  await props.storeAction(props.links.prev);
  router.push({
    path: props.path,
    query: { page: props.meta.current_page - 1 },
  });
}
async function nextPage() {
  await props.storeAction(props.links.next);
  router.push({
    path: props.path,
    query: { page: props.meta.current_page + 1 },
  });
}
async function lastPage() {
  await props.storeAction(props.links.last);
  router.push({
    path: props.path,
    query: { page: props.meta.last_page },
  });
}
</script>

<template>
  <div aria-label="Pagination" class="flex items-center justify-between py-4">
    <p class="text-sm text-gray-500">
      Page {{ meta.current_page }} of {{ meta.last_page }}
    </p>
    <div class="flex">
      <button
        v-if="links.prev"
        rel="first"
        type="button"
        @click="firstPage"
        :class="btnStyles"
      >
        First
      </button>

      <button
        v-if="links.prev"
        rel="prev"
        type="button"
        @click="prevPage"
        :class="btnStyles"
      >
        Previous
      </button>

      <button
        v-if="links.next"
        rel="next"
        type="button"
        @click="nextPage"
        :class="btnStyles"
      >
        Next
      </button>

      <button
        v-if="links.next"
        rel="last"
        type="button"
        @click="lastPage"
        :class="btnStyles"
      >
        Last
      </button>
    </div>
  </div>
</template>
