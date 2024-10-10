<template>
    <div class="home">
      <section class="introduction">
        <div class="intro-header">
          <h2>  - 个人信息 <span class="more"></span></h2>
        </div>
        <p class="intro-content">
              张兴，北京邮电大学教授，博士生导师，信通院学术委员会委员，无线通信研究中心主任。

2007年6月毕业于北京邮电大学，获工学博士学位。2015年牛津大学高级访问学者。2014年至今任北京邮电大学教授、博士生导师。中国大数据技术与应用联盟副秘书长。入选北京科技新星和北京青年英才计划。IEEE高级会员。担任中国通信学会数字孪生与网络仿真委员会副主任委员、卫星通信委员会委员、算力网络委员会委员等。        </p>
      </section>
  
      <section class="research-directions">
        <div class="section-header">
          <h2>  - 研究方向</h2>
        </div>
        <ul class="direction-list">
          <li>5G/6G移动通信系统</li>
          <li>卫星互联网、星地融合信息网络</li>
          <li>算力网络与智能计算</li>
          <li>移动边缘网络与边缘智能</li>
          
        </ul>
      </section>
  
      <section class="project-introduction">
        <div class="section-header">
          <h2>  -  项目简介</h2>
        </div>
        <p class="project-content">
            近年来主持或作为主要人员完成国家973课题、国家重点研发计划课题、国防技术基础加强重点课题(173)、国家自然科学基金、企事业联合研发课题等三十余项。在国际期刊与会议上发表300余篇论文，多篇论文入选ESI高被引文章；申请发明专利100余项，5项专利获得转让。出版学术专著3部、译著2部。        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  };
  </script>
  
  <style scoped>
  .home {
    width:75%;
    padding: 15px;
    background-color: #ffffff;
    color: #333;
  }
  
  .introduction, .research-directions, .project-introduction {
    
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f9f9f9;
  }
  
  .intro-header, .section-header {
    background: linear-gradient(to right, #151440, white);
    color: white;
    padding: 1px;
    border-radius: 2px;
    border-bottom: 2px solid #151440;
    margin-bottom: 5px;
    
  }
  h2 {
  font-size: 24px;
  margin: 5px 0;
  color: white;
}
  
  .icon-personal-info::before {
    content: "\f007";
    font-family: 'FontAwesome';
    color: white;
    margin-right: 10px;
  }
  
  h2 {
    font-size: 24px;
    color: white;
  }
  
  .more {
    margin-left: auto;
    font-size: 18px;
    color: white;
  }
  
  .intro-content, .project-content {
    font-size: 18px;
    line-height: 1.8;
    text-align: justify;
    margin: 15px;
  }
  
  .direction-list {
    list-style: disc inside;
    font-size: 18px;
    line-height: 1.8;
    padding-left: 20px;
  }
  </style>