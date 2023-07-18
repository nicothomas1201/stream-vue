<template>
  <div class="live-badge">
    <span class="text">{{ text }}</span>
  </div>  
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
  text: String
})

const { text } = toRefs(props)
</script>

<style scoped>
.live-badge{
  background: var(--red);
  padding-inline: 4px;
  border: none;
  border-radius: 2px;
  color: var(--white-1);
  position: absolute;
  top: 16px;
  left: 20px;
}

.live-badge .text{
  font: var(--caption-bold);
  text-transform: uppercase;
}
</style>