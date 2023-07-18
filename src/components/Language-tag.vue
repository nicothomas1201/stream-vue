<template>
  <span class="tag">{{ language }}</span>
</template>

<script setup>
  import { toRefs } from "vue"

  const props = defineProps({
    language: String
  })

  const { language } = toRefs(props)
</script>

<style scoped>
.tag{
  background: var(--grey-2);
  color: var(--white-1);
  font:  var(--caption-regular);
  padding: 2px 4px;
  border: none;
  border-radius: 22px;
}
</style>