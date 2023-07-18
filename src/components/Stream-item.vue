<template>
  <div class="stream-item">
    <img class="stream-thumbnail" :src="url" width="336" height="188" />
    <div class="stream-details">
      <div class="profile-avatar">
        <img :src="user.profile_image_url"  width="32" height="32" :alt="user.login"/>
      </div>
      <div class="text">
        <h2 class="stream-title">{{ stream.title }}</h2>
        <h3 class="profile-name">{{ user.display_name }}</h3>
        <div class="tags-section">
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
  import { getThumbnailUrl } from "../utils"
  import LanguageTag from "./Language-tag.vue";

  const props = defineProps({
    stream: Object,
    user: Object
  })
  const { stream, user } = toRefs(props)
  const thumbnail = stream.value.thumbnail_url
  let url = getThumbnailUrl(thumbnail)
  console.log(stream.value)
  

</script>

<style scoped>
.stream-item{
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stream-item .stream-thumbnail{
  align-self: center;
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

.stream-details .profile-avatar{
  max-inline-size: 32px;
  inline-size: 100%;
  block-size: 32px;
  border-radius: 50%;
  overflow: hidden;
}


.profile-avatar > img{
  vertical-align: middle;
}

.tags-section{
  display: flex;
  gap: 8px;
  margin-block-start: 4px;
}

</style>