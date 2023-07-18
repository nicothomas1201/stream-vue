<template>
  <div class="layout-container">
    <div class="header-section">
      <Header />
    </div>
    

      <div class="sidebar-section">
        <Sidebar  />
      </div>

    <div class="main-section">
      <Main />
    </div>

    <Modal />
  </div>
</template>

<script setup>
  import Header from "./Header.vue";
  import Sidebar from "./Sidebar.vue";
  import Main from "./Main.vue";
  import Modal from "./Modal.vue";
  import useStreamsStore from '../stores/streams.store.js'


  const streamsStore = useStreamsStore()
  await streamsStore.fetchStreams()

</script>

<style scoped>
.layout-container{
  display: grid;
  grid-template-rows: minmax(50px, 80px) auto;
  grid-template-columns: max-content auto;
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