<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { login } from '@/api/auth'

const userId = ref('')
const router = useRouter()
const userStore = useUserStore()
const errorMessage = ref('')

async function loginInAccount() {
  if (!userId.value) {
    errorMessage.value = 'Пожалуйста, введите User ID'
    return
  }

  if (userId.value.length < 3) {
    errorMessage.value = 'User ID должен содержать не менее 3 символов'
    return
  }

  errorMessage.value = ''

  try {
    await login(userId.value)
    userStore.setUser(userId.value)
    router.push({ path: '/chat' })
  } catch (error: any) {
    errorMessage.value = error.message || 'Ошибка входа в систему'
  }
}
</script>

<template>
  <main class="wrapper">
    <form @submit.prevent="loginInAccount" class="login surface">
      <h1>Войти в аккаунт</h1>
      <div class="form-group">
        <label for="user_id">User ID:</label>
        <input v-model="userId" id="user_id" name="user_id" type="text" />
      </div>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <button type="submit">Войти</button>
    </form>
  </main>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  width: 300px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:hover {
  background-color: var(--color-primary-hover);
}

.error-message {
  color: red;
  margin-bottom: 1rem;
}
</style>
