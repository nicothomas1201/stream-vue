<template>
  <article v-if="show" class="sidebar">
    <div class="sidebar-header">
      <h2 class="title">canales recomendados</h2>
      <button class="button-icon" @click="showSidebar">
        <ShareRigth  :size="24" />
      </button>
    </div>

    <ChannelList>
      <template #children>
        <ChannelItem 
          v-for="channel in channels" 
          :key="channel.broadcaster_id"
          :channel="channel"
        />
      </template>
    </ChannelList>
  </article>

  <article v-else class="sidebar">
    <button class="button-icon close" @click="showSidebar">
      <ShareRigth  :size="24" />
    </button>
    <ChannelList class="list-close">
      <template #children>           
        <ProfileAvatar
          v-for="channel in channels" 
          :key="channel.broadcaster_id"        
          :src="channel.profile.profile_image_url" 
          :alt="channel.profile.login" 
        />
      </template>
    </ChannelList>
  </article>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useStreamsStore from '../stores/streams.store'
  import ShareRigth from './icons/share-rigth.vue';
  import ChannelItem from './Channel-item.vue';
  import { toRef } from 'vue';
  import ChannelList from './Channel-list.vue';
  import ProfileAvatar from './Profile-avatar.vue'


  const show = toRef(true)

  function showSidebar (){
    show.value = !show.value 
  }
  const streamStore = useStreamsStore()
  const { channels } = storeToRefs(streamStore)
</script>

<style scoped>
.sidebar{
  inline-size: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.list-close{
  gap: 8px;
  margin-block-start: 16px;
}

button.close{
  transform: rotate(180deg);
}

.sidebar-header{
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.button-icon{
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.button-icon > svg{
  vertical-align: middle;
}

.sidebar-header .title{
  font: var(--body2-regular);
  color: var(--white-1);
  text-transform: uppercase;
  margin: 0;
}


</style>
