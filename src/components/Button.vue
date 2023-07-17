<template>
  <button :class="`button ${buttonClass}`">{{ text }}</button>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
  buttonClass: String,
  text: String
})

const { buttonClass } = toRefs(props)

</script>

<style scoped>
.button{
  font: var(--caption-bold);
  color: var(--white-2);
  border-radius: 4px;
  padding: 12px 24px; 
  border: none;  
  cursor: pointer;
}

.button.primary{
  background-color: var(--primary);
}

.button.secondary{
  background-color: var(--grey-1);
}

.button.secondary-white{
  background-color: var(--white-2);
  color: var(--black-1);
}

</style>