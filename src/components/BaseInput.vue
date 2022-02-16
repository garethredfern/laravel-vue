<script>
export default {
  name: "BaseInput",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div>
    <label
      :for="name"
      class="text-sm text-gray-500"
      :class="{ 'sr-only': !showLabel }"
      v-if="label"
    >
      {{ label }}
    </label>
    <input
      :id="name"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :value="$attrs.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
    />
  </div>
</template>
