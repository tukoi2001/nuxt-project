<template>
  <div>
    <div>Post ID {{ $route.params.id }}</div>
    <button @click="onBack">Back to Post</button>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const onBack = (): void => {
  router.push("/about");
};
</script>

<style lang="scss" scoped></style>
