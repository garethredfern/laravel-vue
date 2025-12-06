<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import ProfileForm from '@/components/ProfileForm.vue'
import PasswordForm from '@/components/PasswordForm.vue'
import AvatarUpload from '@/components/AvatarUpload.vue'

const auth = useAuthStore()
const activeTab = ref<'profile' | 'password' | 'avatar'>('profile')
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

    <div class="bg-white shadow rounded-lg overflow-hidden">
      <!-- Tabs -->
      <div class="border-b border-gray-200">
        <nav class="flex -mb-px">
          <button
            @click="activeTab = 'profile'"
            :class="[
              'px-6 py-4 text-sm font-medium',
              activeTab === 'profile'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            Profile
          </button>
          <button
            @click="activeTab = 'password'"
            :class="[
              'px-6 py-4 text-sm font-medium',
              activeTab === 'password'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            Password
          </button>
          <button
            @click="activeTab = 'avatar'"
            :class="[
              'px-6 py-4 text-sm font-medium',
              activeTab === 'avatar'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            Avatar
          </button>
        </nav>
      </div>

      <!-- Tab Content -->
      <div class="p-6">
        <ProfileForm v-if="activeTab === 'profile'" />
        <PasswordForm v-else-if="activeTab === 'password'" />
        <AvatarUpload v-else-if="activeTab === 'avatar'" />
      </div>
    </div>
  </div>
</template>
