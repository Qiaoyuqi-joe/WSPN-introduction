<template>
  <AppLayout1 :pageTitle="'News and Updates'">
    <div class="news">
      <!-- News Section -->
      <section class="news-section">
        <!-- Individual News Items -->
        <article class="news-item">
          <h3>智能路口沙盘演示平台</h3>
          <p><small>Posted on December 9, 2022 by niulab</small></p>
          <p>智能路口沙盘演示平台...</p>
          <div class="news-meta">
            <span>Posted in Notifications, Visitings | </span>
            <a href="#">Leave a comment</a>
          </div>
        </article>

        <article class="news-item">
          <h3>Dolphins Dataset</h3>
          <p><small>Posted on June 7, 2022 by niulab</small></p>
          <p>
            DOLPHINS, Dataset for cOllaborative Perception enabled Harmonious and INterconnected Self-driving, provides temporally aligned visual and LiDAR information collected from different perspectives, i.e., vehicles and road side units...
          </p>
          <div class="news-meta">
            <span>Posted in Notifications, Visitings | </span>
            <a href="#">Leave a comment</a>
          </div>
        </article>

        <article class="news-item">
          <h3>Niulab成员参加第一届6G通信感知一体化学术研讨会</h3>
          <p><small>Posted on May 5, 2021 by niulab</small></p>
          <p>时间：2021.04.15 地点：成都...</p>
          <div class="news-meta">
            <span>Posted in Notifications, Visitings | </span>
            <a href="#">Leave a comment</a>
          </div>
        </article>

        <article class="news-item">
          <h3>Niulab成员参加第六届牛顿论坛</h3>
          <p><small>Posted on December 26, 2020 by niulab</small></p>
          <p>时间：2020.12.25-26 地点：清华大学...</p>
          <div class="news-meta">
            <span>Posted in Notifications, Visitings | </span>
            <a href="#">Leave a comment</a>
          </div>
        </article>
      </section>
    </div>
  </AppLayout1>
</template>

<script>
import AppLayout1 from "@/components/AppLayout1.vue";

export default {
  name: 'News',
  components: {
    AppLayout1
  },
};
</script>

<style scoped>
.news {
  width: 100%;
  padding: 15px;
  background-color: #ffffff;
  color: #333;
}

.news-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-item {
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.news-item h3 {
  font-size: 22px;
  color: #151440;
  margin-bottom: 5px;
}

.news-item p {
  font-size: 16px;
  line-height: 1.6;
}

.news-meta {
  font-size: 14px;
  color: #888;
}

.news-meta a {
  color: #007bff;
  text-decoration: none;
}

.news-meta a:hover {
  text-decoration: underline;
}
</style>
