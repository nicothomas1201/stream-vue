<template>
  <div v-if="!response.error" class="layout-container">
    <div class="header-section">
      <Header />
    </div>
    

      <div class="sidebar-section">
        <Sidebar  />
      </div>

    <div class="main-section">
      <router-view />
    </div>

    <Modal />
  </div>

  <div v-else>
    Ha ocurrido un error, intentalo mas tarde
  </div>
</template>

<script setup>
  import Header from "./Header.vue";
  import Sidebar from "./Sidebar.vue";
  import Modal from "./Modal.vue";
  import useStreamsStore from '../stores/streams.store.js'


  const streamsStore = useStreamsStore()
  const response = await streamsStore.setUpStreamsStates()





</script>

<style scoped>
.layout-container{
  display: grid;
  grid-template-rows: minmax(50px, 80px) auto;
  grid-template-columns: min-content auto;
  grid-template-areas: "header header" "sidebar main";
  block-size: 100vh;
}

.header-section{
  grid-area: header;
}

.sidebar-section{
  grid-area: sidebar;
  background: var(--black-2);
}

.main-section{
  grid-area: main;
}


</style>