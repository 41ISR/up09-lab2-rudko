<script setup lang="ts">
// import BiArrowRightCircle from "oh-vue-icons/icons";
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useClientStore } from '@/store/user'
import useSocketStore from '@/store/socket'
import { useMessageStore } from '@/store/message'

import type { UserDTO } from '@/type/user'
import type { MessageDTO } from '@/type/message'
import { CoUnderline } from 'oh-vue-icons/icons'

const userStore = useClientStore()
const messageStore = useMessageStore()

const route = useRoute()
const socketStore = useSocketStore()

const chatPartnerId = ref<string | null>()
const inputedMessage = ref<string | null>()

watch(
  () => route.params.id,
  (newId, oldId) => {
    // react to route changes...
    chatPartnerId.value = route.params.id as string
  }
)

socketStore.socket.emit('register', userStore.userId)

socketStore.socket.on('private_message', (data) => {
  console.log(data)
  // messages.push(data<MessageDTO>);
})

function addMessage(
  from: string,
  to: string,
  message: string,
  timestamp?: string
) {}

const message = ref()

function sendMessage() {
  const timestamp = new Date().toISOString()
  socketStore.socket.emit('private_message', {
    to: chatPartnerId,
    message,
    timestamp,
  })
  // addMessage(
  //   userStore.id || 'me',
  //   chatPartnerId || 'anime',
  //   message.value,
  //   timestamp,
  // )
  inputedMessage.value = ''
}
</script>

<template>
  <div class="content wrapper">
    <header>
      <p>Chat with {{ chatPartnerId }}</p>
    </header>

    <main class="main"></main>

    <footer class="footer">
      <form class="form">
        <input
          v-model="message"
          class="form__input"
          type="text"
          placeholder="Введите сообщение..."
        />
        <button class="form__button" type="submit">Отправить</button>
      </form>
    </footer>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  padding: 0.5rem 2rem;
  border-radius: 50px;
  background-color: var(--vt-c-black);
}

.form__button {
  width: 1rem;
  height: 1rem;
  border: none;
  color: var(--vt-c-white-soft);
  background-color: transparent;
}

.form__input {
  border: none;
  flex: 1;
  height: 1.7rem;
  font-size: 1rem;
  color: var(--vt-c-white-soft);
  background-color: transparent;
}

.form__input:focus-visible {
  border: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}

.main {
  padding: 1rem;
  flex-direction: column;
  display: flex;
  flex: 1;
}
</style>
