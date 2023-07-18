<script setup>
  import { defineAsyncComponent } from 'vue';
  import Modal from '../components/Modal.vue';

  const Layout = defineAsyncComponent(() => import('../components/Layout.vue'))
  
</script>

<template>
  <Suspense>
    <template #default>
      <Layout />
    </template>
    <template #fallback>
      Loading
    </template>
  </Suspense>
  <Modal />
</template>


<style scoped>
</style>