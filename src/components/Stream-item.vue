<template>
    <div @click="handleClickStream" class="stream-item">
      <div class="stream-thumbnail">
        <LiveBadge :text="stream.type" />
        <ViewersCount :viewers="stream.viewer_count" />
        <img :src="url" width="336" height="188" />
      </div>
      <div class="stream-details">
        
        <ProfileAvatar :src="user.profile_image_url" :alt="user.login" />
        <div class="text">
          <h2 class="stream-title">{{ stream.title }}</h2>
          <h3 class="profile-name">{{ user.display_name }}</h3>
          <div class="tags-section" v-if="stream.tags">
            <LanguageTag
              v-for="(tag, i) in stream.tags.slice(0, 3)"
              :key="i"
              :language="tag" 
            />
  
          </div>
        </div>
      </div>
    </div>
</template>


<script setup>
  import { toRefs } from "vue"
  import { useRouter } from "vue-router"
  import { getThumbnailUrl } from "../utils"
  import LanguageTag from "./Language-tag.vue";
  import LiveBadge from "./Live-badge.vue";
  import ViewersCount from "./Viewers-count.vue";
  import ProfileAvatar from "./Profile-avatar.vue";

  const props = defineProps({
    stream: Object,
    user: Object
  })

  const router = useRouter()
  const { stream, user } = toRefs(props)
  const thumbnail = stream.value.thumbnail_url
  let url = getThumbnailUrl(thumbnail)

  function handleClickStream(){
    console.log(stream.value)
    router.push(`/${stream.value.user_login}`)
  }
  

</script>

<style scoped>
.stream-item{
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stream-item .stream-thumbnail{
  inline-size: 100%;
  min-inline-size: 336px;
  position: relative;
}

.stream-item .stream-thumbnail > img{
  object-fit: contain;
  inline-size: 100%;
  block-size: 100%;
}
.stream-item .stream-title{
  font: var(--body2-bold);
  margin: 0;
  inline-size: 296px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stream-item .profile-name{
  font: var(--caption-regular);
  margin: 0;
}

.stream-details{
  display: flex;
  gap: 8px;
}

.tags-section{
  display: flex;
  gap: 8px;
  margin-block-start: 4px;
}

</style>