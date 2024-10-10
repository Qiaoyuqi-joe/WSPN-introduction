<template>
    <header class="header">
      <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
      <h1 class="title">WSPN 实验室</h1>
    </header>
  </template>
  
  <style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
   background: url('../assets/images/Header1.jpg') no-repeat center center;
    background-size: cover;
   /* background-color:#B5DCF9;*/
    color: #fafbfc;
    position: relative;
  }
  
  .logo {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    width: 350px;
    height: 100px;
  }
  
  .title {
    font-size: 40px;
    font-family: 'Microsoft Yahei', serif;
    flex-grow: 1;
    text-align: center;
  }
  </style>