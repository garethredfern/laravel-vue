<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getError } from "@/utils/helpers";
import { useUser } from "@/stores/userStore";
import BaseBtn from "@/components/BaseBtn.vue";
import UserService from "@/services/UserService";
import BaseInput from "@/components/BaseInput.vue";
import FlashMessage from "@/components/FlashMessage.vue";

const route = useRoute();
const userStore = useUser();

const name = ref(null);
const email = ref(null);
const message = ref(null);
const userError = ref(null);

function updateUser() {
  message.value = null;
  userError.value = null;
  const payload = {
    name: name.value,
    email: email.value,
  };
  UserService.updateUser(route.params.id, payload)
    .then(() => userStore.getUser(userStore.user.id))
    .then(() => (message.value = "User updated."))
    .catch((error) => (userError.value = getError(error)));
}

onMounted(() => {
  name.value = userStore.user?.name;
  email.value = userStore.user?.email;
});
</script>

<template>
  <form @submit.prevent="updateUser">
    <BaseInput
      type="text"
      label="Name"
      name="name"
      v-model="name"
      class="mb-2"
    />
    <BaseInput
      type="email"
      label="Email"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="luke@jedi.com"
      class="mb-4"
    />
    <BaseBtn type="submit" text="Update" />
    <FlashMessage :message="message" :error="userError" />
  </form>
</template>
