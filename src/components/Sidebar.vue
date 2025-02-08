<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
userStore.removeUserId()

</script>

<template>
  <header>
    <RouterLink class="header__title" to="/">Теле<span class="blue">чат</span></RouterLink>
    
    <nav class="nav">
      <RouterLink to="/chat">Чаты</RouterLink>
      <RouterLink to="/login">Войти</RouterLink>
    </nav>

    <footer class="bottom">
      <button @click="" class="bottom__button">Выйти</button>
    </footer>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  line-height: 1.5;
  
  display: flex;
  flex-direction: column;

  color: whitesmoke;
  background-color: var(--color-text);
}

.header__title {
  font-size: 2.6rem;
  font-weight: 500;
}

.nav {
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  gap: 0.3rem;
  color: white;
  font-size: 1.2rem;
}

.bottom {
  margin-top: auto;
}

.bottom__button {
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
}

</style>