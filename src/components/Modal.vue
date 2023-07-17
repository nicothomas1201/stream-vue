<template>
  <Teleport to="body">
    <div class="modal-container">
      <Footer />
    </div>
  </Teleport>
</template>

<script setup>
  import Footer from './Footer.vue'
</script>

<style scoped>
.modal-container{
  background-color: var(--primary);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
