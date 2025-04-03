<script setup lang="ts">
import { ref, watch } from 'vue'

import { useClientStore } from '@/store/user';
import { useContactStore } from '@/store/contact';
import { useMessageStore } from '@/store/message';

const messageStore = useMessageStore()
const contactStore = useContactStore()
const clientStore = useClientStore()

function setChatId(contactId: string) {
  clientStore.activeChatId = contactId
}

watch(clientStore.activeChatId, () => {

})
</script>

<template>
  <nav v-if="contactStore.contacts.length === 0">
    Нет доступных контактов.
  </nav>

  <nav v-else v-for="contact in contactStore.contacts" :key="contact.id" class="contacts-list">
    <div @click="setChatId(contact.id)" class="contact">
      {{ contact.id }}
    </div>
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

.contact {
  height: 50px;
  border-bottom: 1px solid var(--color-border);
}
</style>
