<script setup>
import { ref } from "vue";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn.vue";
import FileService from "@/services/FileService";
import FlashMessage from "@/components/FlashMessage.vue";

const props = defineProps({
  fileTypes: {
    type: Array,
    default: null,
  },
  endpoint: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["fileUploaded"]);

const file = ref(null);
const message = ref(null);
const uploadError = ref(null);

function clearMessage() {
  uploadError.value = null;
  message.value = null;
}
function fileChange(event) {
  clearMessage();
  file.value = event.target.files[0];
}
function uploadFile() {
  const payload = {};
  const formData = new FormData();

  formData.append("file", file.value);
  payload.file = formData;
  payload.endpoint = props.endpoint;

  clearMessage();

  FileService.uploadFile(payload)
    .then(() => {
      message.value = "File uploaded.";
      emit("fileUploaded");
    })
    .catch((error) => (uploadError.value = getError(error)));
}
</script>

<template>
  <form @submit.prevent="uploadFile">
    <div class="mb-4">
      <label for="file" class="sr-only">
        {{ label }}
      </label>
      <input type="file" :accept="fileTypes" @change="fileChange" id="file" />
    </div>
    <BaseBtn text="Upload" />
    <FlashMessage :message="message" :error="uploadError" />
  </form>
</template>
