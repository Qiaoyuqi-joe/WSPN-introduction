<template>
  <AppLayout1 :pageTitle="'Awards and Funds'">
    <div class="awards">
      <!-- Awards and Funds Section -->
      <section class="awards-section">
        <ul>
          <li>教育部技术发明奖一等奖 1 项</li>
          <li>教育部自然科学奖二等奖 1 项</li>
          <li>中国电子学会科技进步二等奖 1 项</li>
          <li>IEEE等国际学术会议最佳论文奖（Best Paper Award）6 项</li>
          <li>IEEE WCSP十周年最佳论文奖</li>
          <li>IEEE Outstanding Leadership Award</li>
          <li>2019年麒麟麟科技技术奖</li>
          <li>在ITU/3GPP等提交标准提案立项 30 余项，国内通信行业标准 2 项</li>
          <li>研究成果获中国通信标准化协会CCSA优秀案例</li>
          <li>2023年首都应急管理优秀案例</li>
          <li>2022和2023年度国际电信联盟（ITU）中方优秀文稿</li>
          <li>2023边缘计算十大解决方案</li>
        </ul>
      </section>
    </div>
  </AppLayout1>
</template>

<script>
import AppLayout1 from "@/components/AppLayout1.vue";

export default {
  name: 'AwardsFunds',
  components: {
    AppLayout1
  },
};
</script>

<style scoped>
.awards {
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  color: #333;
}

.awards-section {
  max-width: 900px;
  margin: 0 auto;
}

ul {
  list-style: disc;
  padding-left: 0px;
  font-size: 18px;
  line-height: 1.8;
  color: #333;
}

li {
  margin-bottom: 10px;
}
</style>
