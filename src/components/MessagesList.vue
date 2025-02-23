<script setup lang="ts">

</script>


<template>
  <div class="messages">
    <Message from="" />
  </div>
</template>

<style csoped>
.messages {
  flex: 1;
  overflow-y: auto;
}

.message {
  background-color: var(--color-primary);
  color: white;
  border-radius: 100px;
}
</style>