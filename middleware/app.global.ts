export default defineNuxtRouteMiddleware((_to, _from) => {
  const user = useSupabaseUser();
  // eslint-disable-next-line no-console
  console.log(user, "12");
});
