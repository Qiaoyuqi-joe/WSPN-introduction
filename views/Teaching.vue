<template>
    <div class="teaching">
      <div class="section-header">
        <h2>教学授课</h2>
      </div>
      <ul class="class-list">
        <li>Class 1</li>
        <li>Class 2</li>
        <li>Class 3</li>
        <li>Class 4</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Teaching'
  };
  </script>
  
  <style scoped>
  .teaching {
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
  
  .class-list {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
    line-height: 1.8;
  }
  </style>