<template>
    <div class="service">
      <div class="section-header">
        <h2>社会兼职</h2>
      </div>
      <ul class="service-list">
        <li>中国通信学会数字孪生与网络仿真专委会 副主任委员</li>
        <li>中国通信学会算力网络专委会 委员</li>
        <li>中国通信学会卫星通信委员会 委员</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Service'
  };
  </script>
  
  <style scoped>
  .service {
    width:75%;
    padding: 20px;
    background-color: #ffffff;
    color: #333;
  }
  
  .section-header {
    background: linear-gradient(to right, #151440, white);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .service-list {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
    line-height: 1.8;
  }
  </style>