<template>
    <div class="papers">
      <div class="section-header">
        <h2>学术论文</h2>
      </div>
      <table class="papers-table">
        <thead>
          <tr>
            <th>论文标题</th>
            <th>期刊名称</th>
            <th>发表日期</th>
            <th>简介</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paper 1</td>
            <td>Journal A</td>
            <td>2023年6月</td>
            <td>简介 1</td>
          </tr>
          <tr>
            <td>Paper 2</td>
            <td>Journal B</td>
            <td>2022年11月</td>
            <td>简介 2</td>
          </tr>
          <tr>
            <td>Paper 3</td>
            <td>Journal C</td>
            <td>2023年3月</td>
            <td>简介 3</td>
          </tr>
          <tr>
            <td>Paper 4</td>
            <td>Journal D</td>
            <td>2021年9月</td>
            <td>简介 4</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Papers'
  };
  </script>
  
  <style scoped>
  .papers {
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
  
  .papers-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .papers-table th, .papers-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  .papers-table th {
    background-color: #151440;
    color: white;
  }
  
  .papers-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>