<template>
  <div class="viewers-count">
    <span class="text">{{ formatViewers }} espectadores</span>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";
import { formatViewersCount } from "../utils";

const props = defineProps({
  viewers: Number
})

const { viewers } = toRefs(props)

const formatViewers = computed(() => {
  return formatViewersCount(viewers.value)

})

</script>

<style scoped>
.viewers-count{
  position: absolute;
  bottom: 16px;
  left: 16px;
  border-radius: 2px;
  background: rgba(14, 14, 16, 0.80);
  padding-inline: 4px;
}

.viewers-count .text{
  font: var(--caption-regular);
  color: var(--white-1);
}
</style>