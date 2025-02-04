<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <Sidebar class="sidebar"/>
  <RouterView class="content"/>
</template>

<style scoped>
.sidebar {
  grid-column: 1 / 2;
}

.content {
  grid-column: 2 / span 5;
}

</style>
