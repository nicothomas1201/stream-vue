<template>
  <TwitchChat :channel-name="channelName" />
</template>

<script setup>
import { toRefs } from "vue"
import TwitchChat from "../components/Twitch-chat.vue";

const props = defineProps({
  channelName: String
})

const { channelName } = toRefs(props)
</script>

<style scoped>

</style>