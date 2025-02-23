<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { useContactStore } from '@/store/contact';
import { useMessageStore } from '@/store/message';

const messageStore = useMessageStore()
const contactStore = useContactStore()

</script>

<template>
  <nav v-if="contactStore.contacts.length === 0">
    Нет доступных контактов.
  </nav>
  <nav v-else v-for="contact in contactStore.contacts" :key="contact.id" class="contacts-list">
    <!-- <router-link :to="{ name: 'Chat', params: { id: contact.id } }" class="contact-list__contact"> -->
      (ID: {{ contact.id }})
    <!-- </router-link> -->
  </nav>
</template>

<style scoped>
.contact-list {
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  gap: 0.3rem;
  color: white;
  font-size: 1.2rem;
}
</style>
