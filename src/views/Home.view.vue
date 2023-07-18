<script setup>
  import { defineAsyncComponent } from 'vue';
  import Loading from '../components/Loading.vue';

  const Layout = defineAsyncComponent(() => import('../components/Layout.vue'))
  
</script>

<template>
  <Suspense>
    <template #default>
      <Layout />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>


<style scoped>
</style>