<script setup>
import { computed } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: null,
  },
  errorMessage: {
    type: [Object, String],
    default: null,
  },
});

const errorKeys = computed(() => {
  if (!props.errorMessage || getType(props.errorMessage) === "string") {
    return null;
  }
  return Object.keys(props.errorMessage);
});

function getErrors(key) {
  return props.errorMessage[key];
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
        v-if="errorMessage && getType(errorMessage) === 'string'"
        key="error"
        class="mt-2 text-sm text-pink-500"
      >
        {{ errorMessage }}
      </p>
      <ul
        v-if="getType(errorMessage) === 'object'"
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
