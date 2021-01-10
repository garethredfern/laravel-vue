<template>
  <form @submit.prevent="uploadFile">
    <BaseInput
      type="file"
      :label="label"
      name="file"
      v-model="file"
      :accept="fileTypes"
      class="mb-4"
    />
    <div>
      <BaseBtn text="Upload" />
    </div>
    <FlashMessage :error="error" />
  </form>
</template>

<script>
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn";
import BaseInput from "@/components/BaseInput";
import FileService from "@/services/FileService";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "FileUpload",
  props: {
    fileTypes: {
      type: Array,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
  },
  components: {
    BaseBtn,
    BaseInput,
    FlashMessage,
  },
  data() {
    return {
      file: null,
      message: null,
      error: null,
    };
  },
  methods: {
    uploadFile() {
      const payload = {};
      FileService.uploadFile(payload)
        .then(() => (this.message = "File uploaded."))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>
