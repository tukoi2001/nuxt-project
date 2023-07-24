<template>
  <div class="index-page">
    <NavBarExample />
    <div class="index-page__title">{{ title }}</div>
    <div>{{ t("welcome") }}</div>
  </div>
</template>

<script setup lang="ts">
import useSWRV from "swrv";
import fetcher from "@/api/app";

const { t } = useI18n();
const title = ref<string>("This is a Home Page");

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
.index-page {
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
}
</style>
