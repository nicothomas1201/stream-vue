<template>
  <header class="header">
    <h1 class="title">stream</h1>

    <div class="buttons-container">
      <Button :button-class="'secondary'" :text="'Iniciar Sesión'" />
      <Button :button-class="'primary'" :text="'Registrarse'" />
    </div>
  </header>
</template>

<script setup>
  import Button from './Button.vue';
</script>


<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px 40px;
}

.title{
  font: var(--logo);
  text-transform: uppercase;
  color: var(--white-2);
}

.buttons-container{
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>