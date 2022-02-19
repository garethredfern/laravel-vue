<script setup>
import { computed } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: null,
  },
  error: {
    type: [Object, String],
    default: null,
  },
});

const errorKeys = computed(() => {
  if (!this.error || this.getType(this.error) === "string") {
    return null;
  }
  return Object.keys(this.error);
});

function getErrors(key) {
  return this.error[key];
}
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
function titleCase(value) {
  return value.replace("_", " ");
}
</script>

<template>
  <div class="py-2">
    <transition-group name="fade">
      <p v-if="message" class="mt-2 text-sm text-blue-400" key="message">
        {{ message }}
      </p>
      <p
        v-if="error && getType(error) === 'string'"
        key="error"
        class="mt-2 text-sm text-pink-500"
      >
        {{ error }}
      </p>
      <ul
        v-if="getType(error) === 'object'"
        class="mt-2 text-sm text-pink-500"
        key="error-list"
      >
        <li v-for="key in errorKeys" :key="key">
          <b class="font-bold capitalize">{{ titleCase(key) }}</b>
          <ul class="ml-2">
            <li v-for="(item, index) in getErrors(key)" :key="`${index}-error`">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </transition-group>
  </div>
</template>
