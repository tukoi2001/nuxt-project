<template>
  <nav class="nav-bar">
    <li>
      <NuxtLink to="/"> Home </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about"> About </NuxtLink>
    </li>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 12px;
}
</style>
