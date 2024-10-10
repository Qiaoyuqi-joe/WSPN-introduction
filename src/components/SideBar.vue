<template>
    <aside class="sidebar">
      <div class="profile">
        <img src="@/assets/images/profile.png" alt="Profile Picture" class="profile-picture" />
        <h2 class="name">Zhang Xing</h2>
        <h2 class="name">张兴</h2>
        <p class="title">北京邮电大学</p>
        <p class="info" style="text-align: center;"><strong>博士生导师 硕士生导师</strong></p>        <p class="info"><strong>所属学院：</strong> 信息与通信工程学院</p>
        <p class="info"><strong>学科：</strong> 信息与通信工程*</p>
        <p class="info"><strong>职务：</strong> 无线通信研究中心主任</p>
        <p class="info"><strong>职称：</strong> 教授</p>
        <p class="info"><strong>学位：</strong> 博士学位</p>
        <p class="info"><strong>办公地点：</strong> 北京邮电大学科研楼630室</p>
        <p class="info"><strong>电子邮箱：</strong> hszhang@bupt.edu.cn</p>
        <p class="info"><strong>毕业院校：</strong> 北京邮电大学</p>
   
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'SideBar',
    data() {
      return {
        githubLink: 'https://github.com/',
        email: 'aaaa@example.com'
      };
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 300px;
  padding: 20px;
  background: url('../assets/images/background.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  }
  
  .profile {
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
  
  .profile-picture {
    width: 130px;
  height: 160px;
  margin-bottom: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid #fff;
  }
  
  .name {
    font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  color:#ffffff;
  }
  
  .title {
    font-size: 16px;
  color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  }
  
  .info {
    color:#ffffff;
    font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
  }
  
  .github-link {
    display: block;
    margin-bottom: 10px;
    color: #007bff;
    text-decoration: none;
  }
  
  .github-link:hover {
    text-decoration: underline;
  }
  
  .email {
    font-size: 14px;
    color: #555;
  }
  </style>