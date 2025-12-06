<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useMessagesStore } from '@/stores/messages'
import MessageForm from '@/components/MessageForm.vue'
import MessageList from '@/components/MessageList.vue'
import VerifyEmail from '@/components/VerifyEmail.vue'

const auth = useAuthStore()
const messagesStore = useMessagesStore()

const verificationSent = ref(false)

onMounted(() => {
  messagesStore.getMessages()
})

async function sendVerification() {
  await auth.sendVerificationEmail()
  verificationSent.value = true
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

    <VerifyEmail
      v-if="!auth.isVerified"
      :verification-sent="verificationSent"
      @send-verification="sendVerification"
    />

    <div class="bg-white shadow rounded-lg p-6 mb-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Welcome, {{ auth.user?.name }}!</h2>
      <p class="text-gray-600">Email: {{ auth.user?.email }}</p>
      <p v-if="auth.isAdmin" class="text-green-600 mt-2 font-medium">
        You have admin privileges.
      </p>
    </div>

    <div class="bg-white shadow rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Messages</h2>
      <MessageForm @message-posted="messagesStore.getMessages()" />
      <MessageList
        :messages="messagesStore.messages"
        :links="messagesStore.links"
        :loading="messagesStore.isLoading"
        @paginate="messagesStore.paginateMessages"
      />
    </div>
  </div>
</template>
