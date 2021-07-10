<template>
  <div>
    <transition-group name="fade">
      <p v-if="message" class="mt-2 text-sm text-green-500" key="message">
        {{ message }}
      </p>
      <p
        v-if="error && getType(error) === 'string'"
        key="error"
        class="mt-2 text-sm text-red-500"
      >
        {{ error }}
      </p>
      <ul
        v-if="getType(error) === 'object'"
        class="mt-2 text-sm text-red-500"
        key="error-list"
      >
        <li v-for="key in errorKeys" :key="key">
          <b class="font-bold capitalize">{{ key | titleCase }}</b>
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

<script>
export default {
  name: "FlashMessage",
  props: {
    message: {
      type: String,
      default: null,
    },
    error: {
      type: [Object, String],
      default: null,
    },
  },
  computed: {
    errorKeys() {
      if (!this.error || this.getType(this.error) === "string") {
        return null;
      }
      return Object.keys(this.error);
    },
  },
  methods: {
    getErrors(key) {
      return this.error[key];
    },
    getType(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    },
  },
  filters: {
    titleCase(value) {
      return value.replace("_", " ");
    },
  },
};
</script>
