<template>
  <div>
    <TwitchStreamVideo :channel-name="channelName" />
  </div>

</template>

<script setup>
import { toRefs } from "vue"
import TwitchStreamVideo from "../components/Twitch-stream-video.vue";

const props = defineProps({
  channelName: String
})

const { channelName } = toRefs(props)
</script>

<style scoped>

</style>