<template>
  <main class="wrapper">
    <div class="surface">
      <h1>Добро пожаловать в Теле<span class="blue">чат</span></h1>
      <p>Для начала работы войдите в аккаунт</p>
      <RouterLink to="/login">Войти</RouterLink>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100%;
}
</style>