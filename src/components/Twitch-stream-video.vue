<template>
  <div ref="streamContainer"></div>
</template>

<script setup>
import { toRefs, ref, watch } from "vue";

const props = defineProps({
  channelName: String,
})

const streamContainer = ref(null)

const { channelName } = toRefs(props)

watch(streamContainer, (value) =>{
  if(value){
    new Twitch.Embed(value, {
      width: '100%',
      height: '468',
      channel: channelName.value,
    })
  }
}, { immediate: true })


</script>

<style scoped>
</style>