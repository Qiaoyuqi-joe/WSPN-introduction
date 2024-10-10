<template>
    <div class="groups">
      <div class="section-header">
        <h2>研究组成员</h2>
      </div>
      <div class="current-students">
        <div class="sub-header">
          <h3>在读学生</h3>
        </div>
        <div class="phd-students">
          <h4>博士生:</h4>
          <ul class="student-list">
            <li>Shihe Wang (2024-)</li>
            <li>Jiangtao Hu (2024-)</li>
            <li>Hongyu Li (2023-)</li>
            <li>Zhenyan Lu (co-advised with Prof. Shangguang Wang, 2023-)</li>
            <li>Rongjie Yi (PKU, co-advised with Prof. Ao Zhou, 2022-)</li>
            <li>Wangsong Yin (PKU, co-advised with Prof. Xuanzhe Liu, 2022-)</li>
            <li>Li Zhang (2021-)</li>
            <li>Dongqi Cai (co-advised with Prof. Shangguang Wang, 2021-)</li>
            <li>Daliang Xu (PKU, co-advised with Prof. Xuanzhe Liu, 2021-)</li>
            <li>Yanan Li (co-advised with Prof. Shangguang Wang, 2020-)</li>
            <li>Chen Yang (co-advised with Prof. Qibo Sun, 2020-)</li>
          </ul>
        </div>
        <div class="master-students">
          <h4>硕士生:</h4>
          <ul class="student-list">
            <li>2024-present: Xeyuan Yang, Xinge Wang, Mao Qin</li>
            <li>2023-present: Qichen Qiu, Longxi Gao, Xianqing Jia</li>
            <li>2022-present: Xiang Li, Xin Yuan</li>
          </ul>
        </div>
      </div>
      <div class="alumni">
        <div class="sub-header">
          <h3>毕业生</h3>
        </div>
        <ul class="alumni-list">
          <li>Boqing Shi, Master (2021-24)</li>
          <li>Yaozong Wu, Master (2021-24)</li>
          <li>Qiyang Zhang, PhD (co-advised with Prof. Shangguang Wang, 2019-24)</li>
          <li>Jinliang Yuan, PhD (co-advised with Prof. Shangguang Wang, 2019-23)</li>
          <li>Junjie Liu, B.S. (2023)</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Groups'
  };
  </script>
  
  <style scoped>
  .groups {
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
  
  .sub-header {
    background: #151440;
    color: white;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .phd-students, .master-students {
    margin-bottom: 20px;
  }
  
  h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .student-list, .alumni-list {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
    line-height: 1.8;
  }
  </style>