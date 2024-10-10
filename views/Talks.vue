<template>
    <div class="talks">
      <div class="section-header">
        <h2>受邀演讲</h2>
      </div>
      <ul class="talks-list">
        <li><a href="#">A Few Thoughts on Small Language Models, CCF秀湖会议, Suzhou, Sep. 6, 2024</a></li>
        <li><a href="#">Edge Intelligence System in LLM Era, CCFSys, Nanchang, Aug. 4, 2023</a></li>
        <li><a href="#">卫星计算机遇和挑战, CCF ADL算网融合, Beijing, Jul. 23, 2023</a></li>
        <li><a href="#">通向泛在学习的系统软件之路, VALSE, Tianjin, Aug. 24, 2022</a></li>
        <li><a href="#">The Way towards Ubiquitous Learning: a System Perspective, Microsoft Research Asia, Apr. 22, 2021</a></li>
        <li><a href="#">AI Systems towards Mobile and Edge Devices, SAGC 2020, Beijing, Dec. 04, 2020</a></li>
        <li><a href="#">面向移动与边缘设备的人工智能系统, Embedded AI Summit, Shenzhen, Nov. 14, 2020</a></li>
        <li><a href="#">Lessons Learned in my PHD Career</a></li>
      </ul>
  
      <div class="section-header">
        <h2>资料</h2>
      </div>
      <ul class="materials-list">
        <li><a href="#">How to Have a Bad Career in Research/Academia, by David A. Patterson, Nov. 2001</a></li>
        <li><a href="#">How (and How Not) to Write a Good Systems Paper, by Roy Levin and David D. Redell, Jul. 1983</a></li>
        <li><a href="#">How to Read a CS Research Paper?, by Philip W. L. Fong, Jul. 2004</a></li>
        <li><a href="#">Viewpoint: Your Students Are Your Legacy, by David A. Patterson, Mar. 2009</a></li>
        <li><a href="#">How to Look for Ideas in Computer Science Research, by Zhiyun Qian, Jan. 2021</a></li>
        <li><a href="#">THE ELEMENTS OF STYLE (4th edition), by William Strunk Jr. and Edward A. Tenney; first edition by OLIVER STRUNK, 2000</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Talks'
  };
  </script>
  
  <style scoped>
  .talks {
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
  
  .talks-list, .materials-list {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
    line-height: 1.8;
  }
  
  a {
    color: #151440;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>