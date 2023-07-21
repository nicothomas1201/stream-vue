<template>
  <div>
    <TwitchStreamVideo :channel-name="channelName" />
    <h2 class="title-stream">{{ currentStream.title }}</h2>
  </div>

</template>

<script setup>
import { toRefs } from "vue"
import useStreamsStore from "../stores/streams.store" 
import TwitchStreamVideo from "../components/Twitch-stream-video.vue";

const streamsStore = useStreamsStore()

const props = defineProps({
  channelName: String
})

const { channelName } = toRefs(props)

const currentStream = streamsStore.getCurrentStream(channelName)
</script>

<style scoped>
.title-stream{
  font: var(--headline3);
  margin: 16px;
}
</style>