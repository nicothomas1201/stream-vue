<template>
  <div class="profile-avatar">
    <img :src="src"  :width="width" :height="height" :alt="alt"/>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  src: String, 
  alt: String,
  width: {
    type: Number, 
    default: 32
  }, 
  height: {
    type: Number,
    default: 32
  }
})

const { src, width, alt, height } = toRefs(props)
</script>

<style scoped>
.profile-avatar{
  max-inline-size: 32px;
  inline-size: 100%;
  block-size: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-avatar > img{
  vertical-align: middle;
}
</style>