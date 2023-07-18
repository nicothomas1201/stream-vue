<template>
  <footer class="footer">
    <div class="text-content">
      <img src="/icon-logo.png" alt="icon-logo" />
      <p class="text">Regístrate para disfrutar de lo mejor de juansguarnizo.</p>
    </div>
    <Button @click="handleVisibility" button-class="secondary-white" text="Registrate"  />
  </footer>
</template>

<script setup>
  import Button from './Button.vue';
  import useModalStore from '../stores/modal.store'

  const modalStore = useModalStore()


  function handleVisibility(){
    modalStore.changeModalVisibility(false)
  }
</script>

<style scoped>
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
}

.text-content{
  display: flex;
  align-items: center;
  gap: 8px;
  font: var(--headline3);
  color: var(--white-2);
}

.text-content .text{
  margin: 0;
}
</style>