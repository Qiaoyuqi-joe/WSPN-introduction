<template>
    <header class="header1">
      <div class="header-image">
        <img src="../assets/images/background.jpg" alt="Background Image" />
        <div class="header-title">
          <h1>{{ title }}</h1>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header1',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .header1 {
    width: 100%;
    min-height: 500px;
    position: relative;
    overflow: hidden;
  }
  
  .header-image {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .header-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .header-title {
    position: absolute;
    bottom: 20px;
    left: 30px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
  }
  </style>