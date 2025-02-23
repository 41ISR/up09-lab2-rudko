<script setup lang="ts">
import type { MessageDTO } from '@/type/message';

const message = defineProps<MessageDTO>()
</script>

<template>
  <div class="message">
    <div>{{ message.message }}</div>
  </div>
</template>



<style lang="css" scoped>
.message {
  padding: 0.3rem 1rem;
  border-radius: 50% 50% 50% 0%;
}
</style>