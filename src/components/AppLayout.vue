<template>
    <div id="app">
      <HeaderFile />
      <NavigationFile />
      <div class="main-container">
        <SideBar />
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import HeaderFile from './components/HeaderFile.vue';
  import NavigationFile from './components/NavigationFile.vue';
  import SideBar from './components/SideBar.vue';
  
  export default {
    name: 'AppLayout',
    components: {
      HeaderFile,
      NavigationFile,
      SideBar
    }
  };
  </script>
  
  <style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .main-container {
    display: flex;
    flex: 1;
  }
  </style>