<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const user_id = ref('')
async function login_in_account() {

  const API_intstanse = axios.create({
    baseURL: 'https://localhost:3002/api/',
  });

  API_intstanse.post('login', {
    user_id: user_id.value
  })
  .then(function (response) {
    if (!response.data) {return;}

    console.log(response.data);
    
  })
  .catch(function (error) {
    console.log(error);
  });
}  
</script>

<template>
  <main class="wrapper">
    <form class="login surface">
      <h1>Войти в аккаунт</h1>
      <div class="form-group">
        <label for="user_id">User ID:</label>
        <input v-model="user_id" id="user_id" name="user_id" />
      </div>
      <button @click="login_in_account" type="submit">Войти</button>
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
