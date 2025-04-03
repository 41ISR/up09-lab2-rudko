<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { logout } from '@/api/auth'
import { useClientStore } from '@/store/user'
import { useContactStore } from '@/store/contact'
import useSocketStore from '@/store/socket'
import ContactList from '@/components/ContactList.vue'

const userStore = useClientStore()
const contactStore = useContactStore()
const socketStore = useSocketStore()

socketStore.socket.on('users', (newUsers) => {
  console.log(newUsers)
  contactStore.setContacts(newUsers)
})
</script>

<template>
  <div class="sidebar">
    <RouterLink class="sidebar__title" to="/"> Телечат </RouterLink>

    <hr />
    <p>Контакты:</p>
    <ContactList />

    <footer class="bottom">
      <div class="user">
        <p class="user__name">User: {{ userStore.userId }}</p>
        <button
          @click="logout"
          class="bottom__button"
          :disabled="!userStore.userId"
        >
          Выйти
        </button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.sidebar {
  padding: 1rem;
  line-height: 1.5;

  display: flex;
  flex-direction: column;

  color: var(--color-text);
  background-color: var();
  border: 1px solid var(--color-border);
}

.sidebar__title {
  font-size: 2.6rem;
  font-weight: 500;
  color: var(--color-primary);
}

.bottom {
  margin-top: auto;
}

.bottom__button {
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
}

.user {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
