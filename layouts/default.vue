<template>
  <div class="default-layout">
    <TopSideBar />
    <slot></slot>
    <TheFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.default-layout {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: scroll;
}
</style>
