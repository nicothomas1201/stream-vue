<template>
  <div class="channel-item">
    <div class="channel-details">
      <ProfileAvatar :src="channel.profile.profile_image_url" :alt="channel.profile.login" />
      <div class="channel-text">
        <h3 class="title">{{ channel.broadcaster_name }}</h3>
        <span class="game-name">{{ channel.game_name }}</span>
      </div>
    </div>

    <div class="channel-viewers">
      <span class="viewers-text">{{ channel.viewers }}</span>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import ProfileAvatar from "./Profile-avatar.vue"

const props = defineProps({
  channel: Object
})

const { channel } = toRefs(props)

</script>

<style scoped>
.channel-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 8px;
}

.channel-item .channel-viewers{
  position: relative;
}

.channel-item .channel-viewers::before{
  content: '';
  display: inline-block;
  inline-size: 8px;
  block-size: 8px;
  border-radius: 50%;
  background: var(--red);
  bottom: 50%;
  transform: translateY(50%);
  position: absolute;
  left: -12px;
}

.channel-viewers .viewers-text{
  font: var(--caption-regular);
  color: var(--white-1);
}

.channel-item .channel-details{
  display: flex;
  gap: 4px;
  align-items: center;
}

.channel-item .title{
  font: var(--caption-bold);
  margin: 0;
}

.channel-item .game-name{
  display: inline-block;
  font: var(--caption-regular);
  color: var(--white-1);
  inline-size: 100%;
  max-inline-size: 109px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>