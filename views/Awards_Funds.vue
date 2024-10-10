<template>
    <div class="awards-funds">
      <div class="section-header">
        <h2>获奖与资助</h2>
      </div>
      <ul class="awards-list">
        <li>教育部技术发明奖一等奖 1 项</li>
        <li>教育部自然科学奖二等奖 1 项</li>
        <li>中国电子学会科技进步二等奖 1 项</li>
        <li>IEEE等国际学术会议最佳论文奖（Best Paper Award） 6 项</li>
        <li>IEEE WCSP十周年最佳论文奖</li>
        <li>IEEE Outstanding Leadership Award</li>
        <li>2019年麒麟科学技术奖</li>
        <li>在ITU/3GPP等提交标准提案立项 30 余项，国内通信行业标准 2 项</li>
        <li>研究成果获中国通信标准化协会CCSA优秀案例</li>
        <li>2023年首都应急管理优秀案例</li>
        <li>2022和2023年度国际电信联盟（ITU）中方优秀文稿</li>
        <li>2023边缘计算十大解决方案</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AwardsFunds'
  };
  </script>
  
  <style scoped>
  .awards-funds {
    padding: 20px;
    width:75%;
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
  
  .awards-list {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
    line-height: 1.8;
  }
  </style>