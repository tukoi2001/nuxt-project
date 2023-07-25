<template>
  <div>
    <NavBarExample />
    <div>About Page</div>
    <div>
      <div>{{ t("welcome") }}</div>
      <div class="list-post">
        <div v-for="post in posts" :key="post.id" class="list-post__item">
          <div>{{ post.name }}</div>
          <div>{{ post.description }}</div>
          <button @click="onShowDetailPost(post.id)">Details</button>
          <NuxtLink :to="`/about/${post.id}`">See Details more...</NuxtLink>
        </div>
      </div>
      <TheButton :on-click="showDialog" />
      <DialogCommonDialog v-model="isShowDialog" title="Dialog">
        This is a dialog</DialogCommonDialog
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const router = useRouter();

const isShowDialog = ref<boolean>(false);

const showDialog = () => {
  isShowDialog.value = true;
};

const posts = [
  {
    id: "1",
    name: "Post 1",
    description: "This is a post 1",
  },
  {
    id: "post-2",
    name: "Post 2",
    description: "This is a post 2",
  },
];

const onShowDetailPost = (id: string): void => {
  router.push({ path: `/about/${id}` });
};
</script>

<style lang="scss" scoped>
.list-post {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  &__item {
    padding: 20px;
    border: 1px solid #333;
    border-radius: 8px;
  }
}
</style>
