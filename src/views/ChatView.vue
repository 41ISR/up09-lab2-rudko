<script setup lang="ts">
import { socket } from "./../api/socket";

</script>

<template class="content wrapper">
  <main class="main">
    <div class="messages">
      <div class="message">
        <div class="message__author">Имя</div>
        <div class="message__text">Текст сообщения</div>
      </div>
    </div>
  

    <footer class="footer">
      <form>
        <input type="text" placeholder="Введите сообщение" />
        <button type="submit">Отправить</button>
      </form>
    </footer>
  </main>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: whitesmoke;
  background-color: var(--color-text);
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  position: relative;
}

.main {
  padding: 1rem;
  flex-direction: column;
  display: flex;
}

.messages {
  flex: 1;
  overflow-y: auto;
}

</style>
