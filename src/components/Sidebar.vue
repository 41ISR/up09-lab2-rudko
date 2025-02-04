<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
    <RouterLink class="header__title" to="/">Теле<span class="blue">чат</span></RouterLink>
    
    <nav class="nav">
      <RouterLink to="/login">Войти</RouterLink>
      <RouterLink to="/chat">Чаты</RouterLink>
    </nav>
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
</style>