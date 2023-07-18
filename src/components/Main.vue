<template>
  <div class="streams-list">
    <StreamItem
      v-for="stream in streams.data"
      :key="stream.id"
      :stream="stream"
      :user="streamsStore.getUserByLogin(stream.user_login)"
       
    />
  </div>
  
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useStreamsStore from '../stores/streams.store.js'
  import StreamItem from './Stream-item.vue'

  const streamsStore = useStreamsStore()
  const { streams } = storeToRefs(streamsStore)
  console.log(streams.value.data)
</script>

<style scoped>
.streams-list{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  grid-template-rows: repeat(auto-fill, max-content);
  grid-gap: 24px;
  padding: 24px;
  place-content: center;
  place-items: center;
}
</style>