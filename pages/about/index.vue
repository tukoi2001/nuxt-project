<template>
  <div>
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
      <ButtonTheButton :on-click="showDialog" />
      <DialogCommonDialog v-model="isShowDialog" title="Dialog">
        This is a dialog</DialogCommonDialog
      >
    </div>
    <ButtonTheButton :on-click="handleLogout" label="Logout" />
  </div>
</template>

<script lang="ts" setup>
import useSWRV from "swrv";
import fetcher from "@/api/app";
const { t } = useI18n();
const router = useRouter();
const client = useSupabaseAuthClient();

const isShowDialog = ref<boolean>(false);

const showDialog = () => {
  isShowDialog.value = true;
};

const handleLogout = () => {
  client.auth.signOut();
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

const fetchCountries = () => {
  const url = `https://esg-gateway-diginex.qa.dgnx.io/system/countries?sortBy=id`;
  const { data, error, isValidating } = useSWRV<any[]>(url, fetcher);
  // eslint-disable-next-line no-console
  console.log(data.value, "swrv");
  return {
    isLoading: isValidating,
    data,
    error,
  };
};

const fetchCountryAxios = async () => {
  const users = await $fetch(
    "https://esg-gateway-diginex.qa.dgnx.io/system/countries?sortBy=id",
  );
  // eslint-disable-next-line no-console
  console.log(users, "axios");
};

fetchCountries();
fetchCountryAxios();
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
