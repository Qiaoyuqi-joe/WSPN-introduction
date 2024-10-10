<template>
    <nav class="navigation">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/papers" class="nav-item">Papers</router-link>
      <router-link to="/service" class="nav-item">Service</router-link>
      <router-link to="/awards-funds" class="nav-item">Awards & Funds</router-link>
      <router-link to="/groups" class="nav-item">Groups</router-link>
      <router-link to="/teaching" class="nav-item">Teaching</router-link>
      <router-link to="/talks" class="nav-item">Talks</router-link>
    </nav>
  </template>
  
  <style>
  .navigation {
    display: flex;
    justify-content: center;
    background-color: #444444;
    padding: 10px;
    width:100%;
  }
  
  .nav-item {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    padding: 5px 40px;
    border-radius: 5px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  
  .nav-item:hover {
    text-decoration: underline;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
  }
  </style>