<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { login } from '@/api/user'


const user_id = ref('')

const router = useRouter()

const userStore = useUserStore()


function validateUserId () {
  if (!user_id.value) {
    alert('Введите user_id')
    return false
  } else if (user_id.value.length < 3) {
    alert('User_id должен быть не менее 3 символов')
    return false
  }
  // Stupid validation
  return user_id.value.trim()[0]
}

async function loginInAccount() {
  if (!validateUserId()) {return;}

  login(user_id.value)
    .then(() => {
      userStore.setUserId(user_id.value)
      router.push({ path: '/chat' })
    })
    .catch((error) => {
      alert(error)
    })
}  
</script>

<template>
  <main class="wrapper">

    <form @submit.prevent="loginInAccount" class="login surface">
      <h1>Войти в аккаунт</h1>
      <div class="form-group">
        <label for="user_id">User ID:</label>
        <input v-model="user_id" id="user_id" name="user_id" />
      </div>
      <button type="submit">Войти</button>
    </form>
    
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

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>
