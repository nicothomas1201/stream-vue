<template>
  <article class="sidebar">
    <div class="sidebar-header">
      <h2 class="title">canales recomendados</h2>
      <ShareRigth :size="24" />
    </div>

    <ul class="channels-list">
      <ChannelItem 
        v-for="channel in channels" 
        :key="channel.broadcaster_id"
        :channel="channel"
      />
    </ul>
  </article>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useStreamsStore from '../stores/streams.store'
  import ShareRigth from './icons/share-rigth.vue';
  import ChannelItem from './Channel-item.vue';

  const streamStore = useStreamsStore()
  const { channels } = storeToRefs(streamStore)
</script>

<style scoped>
.sidebar{
  inline-size: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.sidebar-header{
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.sidebar-header .title{
  font: var(--body2-regular);
  color: var(--white-1);
  text-transform: uppercase;
  margin: 0;
}

.channels-list{
  list-style: none;
  margin: 0%;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
