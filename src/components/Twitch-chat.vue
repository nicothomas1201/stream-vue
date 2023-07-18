<template>
  <iframe 
    id="twitch-chat-embed"
    :src="`https://www.twitch.tv/embed/${channelName}/chat?parent=http://localhost:5173`"
    :width="width"
    :height="height"
  ></iframe>
</template>

<script setup>
const props = defineProps({
  channelName: String,
  width: {
    type: Number,
    default: 350
  },
  height: {
    type: Number,
    default: 500
  }
})
</script>