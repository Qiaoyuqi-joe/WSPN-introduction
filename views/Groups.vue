<template>
  <AppLayout1 :pageTitle="'Groups'">
    <div class="groups">
      <!-- Faculty Section -->
      <section class="group-section">
        <h3>Faculty</h3>
        <ul>
          <li><a href="#">Zhu, Ziqi</a></li>
          <li><a href="#">Zhou, Sheng</a></li>
        </ul>
      </section>

      <!-- Post Doc Section -->
      <section class="group-section">
        <h3>Post Doc.</h3>
        <ul>
          <li><a href="#">孙远(Yuan, Sun)</a></li>
          <li><a href="#">张志(Zhao, Zhen)</a></li>
        </ul>
      </section>

      <!-- Students Section -->
      <section class="group-section">
        <h3>Students</h3>
        <ul>
          <li><a href="#">房思佳(Fang, Sijia)</a>, Ph.D. student, joined the group in 2018</li>
          <li><a href="#">黄小妍(Huang, Xiaoyan)</a>, Ph.D. student, joined the group in 2018</li>
          <li><a href="#">张成杰(Zhang, Chengjie)</a>, Ph.D. student, joined the group in 2019</li>
          <li><a href="#">王浩伦(Wang, Haolun)</a>, Ph.D. student, joined the group in 2019</li>
          <li><a href="#">房月怡(Fang, Yueyi)</a>, Ph.D. student, joined the group in 2020</li>
          <li><a href="#">陈晓瑜(Chen, Xiaoyu)</a>, M.S. student, joined the group in 2020</li>
          <!-- 其他学生信息 -->
        </ul>
      </section>

      <!-- Undergraduate Students Section -->
      <section class="group-section">
        <h3>Undergraduated Students</h3>
        <ul>
          <li><a href="#">李小杰(Li, XiaoJie)</a></li>
          <!-- 更多本科生信息 -->
        </ul>
      </section>

      <!-- Visiting Students Section -->
      <section class="group-section">
        <h3>Visiting Students</h3>
        <ul>
          <li><a href="#">Adil Ramdani</a>, Sep. 2006 - Jan. 2007</li>
          <li><a href="#">Anna Ferrer Boix</a>, Feb. 2005 - Jun. 2006</li>
          <li><a href="#">Willis Beverly</a>, Aug. 2003 - Oct. 2005</li>
          <!-- 其他访学生信息 -->
        </ul>
      </section>

      <!-- Former PhD Section -->
      <section class="group-section">
        <h3>Former Ph.D.</h3>
        <ul>
          <li><a href="#">姚军(Employment of PhDs)</a>, Sept. 2017 - Jul. 2022</li>
          <li><a href="#">文智(Wen, Zhi)</a>, Sept. 2016 - Sept. 2021</li>
          <li><a href="#">孙远(Sun, Yiyuan)</a>, Sept. 2015 - Jul. 2020</li>
          <!-- 其他前博士生信息 -->
        </ul>
      </section>

      <!-- Former Master Section -->
      <section class="group-section">
        <h3>Former Master</h3>
        <ul>
          <li><a href="#">陶廷乐(Tao, TingLe)</a>, Sept. 2016 - Jul. 2019</li>
          <li><a href="#">杨亚平(Yang, Yaping)</a>, Sept. 2016 - Jul. 2018</li>
          <li><a href="#">曹恒星(Cao, Hengxing)</a>, Sept. 2014 - Jul. 2017</li>
          <!-- 其他前硕士生信息 -->
        </ul>
      </section>
    </div>
  </AppLayout1>
</template>

<script>
import AppLayout1 from "@/components/AppLayout1.vue";

export default {
  name: 'Groups',
  components: {
    AppLayout1
  },
};
</script>

<style scoped>
.groups {
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  color: #333;
}

.group-section {
  margin-bottom: 30px;
}

h3 {
  font-size: 22px;
  color: #151440;
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
  line-height: 1.8;
}

li {
  margin-bottom: 8px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
