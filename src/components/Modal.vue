<template>
  <Teleport to="body">
    <div v-show="show" class="modal-container">
      <Footer />
    </div>
  </Teleport>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import Footer from './Footer.vue'
  import useModalStore from '../stores/modal.store'

  const modalStore = useModalStore()
  const { show } = storeToRefs(modalStore)
</script>

<style scoped>
.modal-container{
  background-color: var(--primary);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
