<template>
  <ul class="channels-list">
    <slot name="children"></slot>
  </ul>
</template>

<style scoped>
.channels-list{
  list-style: none;
  margin: 0%;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>