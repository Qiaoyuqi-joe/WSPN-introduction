<template>
  <AppLayout1 :pageTitle="'Publications'">
    <div class="publications">
      <!-- Publication Item -->
      <section class="publication-item">
        <h3>A Predictive Frame Transmission Scheme for Cloud Gaming in Mobile Edge Cloudlet Systems</h3>
        <p class="authors">
          Tianchu Zhao, Sheng Zhou, Yuxuan Sun, and Zhisheng Niu, “A Predictive Frame Transmission Scheme for Cloud Gaming in Mobile Edge Cloudlet Systems”, <em>IEEE Trans. Mobile Computing</em>, 22(7):3774-3789, 2023
        </p>
        <div class="meta">
          <span>Posted on August 20, 2023 | Tagged Journal | </span>
          <a href="#">Leave a comment</a>
        </div>
      </section>

      <!-- Publication Item -->
      <section class="publication-item">
        <h3>Online V2X Scheduling for Raw-Level Cooperative Perception</h3>
        <p class="authors">
          LANGUAGE English SOURCE IEEE ICC'22. Seoul, South Korea, May 16-20, 2022 Published Date: 2022-05. Abstract: Cooperative perception of connected vehicles comes to the rescue when the field of view restricts stand-alone intelligence.
        </p>
        <div class="meta">
          <span>Posted on October 8, 2022 | Tagged Conference | </span>
          <a href="#">Leave a comment</a>
        </div>
      </section>

      <!-- Publication Item -->
      <section class="publication-item">
        <h3>Statues Update for Accurate Remote Estimation: Centralized and Decentralized Schemes</h3>
        <p class="authors">
          Jinzhou Sun, Yuxuan Sun, Sheng Zhou and Zhisheng Niu, “Statues Update for Accurate Remote Estimation: Centralized and Decentralized Schemes”, <em>IEICE Trans. Commun.</em>, vol. E105-B, no. 2, pp. 131-139, Feb. 2022
        </p>
        <div class="meta">
          <span>Posted on October 8, 2022 | Tagged Journal | </span>
          <a href="#">Leave a comment</a>
        </div>
      </section>

      <!-- Publication Item -->
      <section class="publication-item">
        <h3>Coverage Analyses on Directional Transmissions Ultra-Dense Networks with Imperfect Beam Alignment</h3>
        <p class="authors">
          Y. Xu and S. Zhou, “Coverage Analyses on Directional Transmissions Ultra-Dense Networks with Imperfect Beam Alignment”, <em>China Communications</em>, 19(5):318-328, 2022
        </p>
        <div class="meta">
          <span>Posted on October 8, 2022 | Tagged Journal | </span>
          <a href="#">Leave a comment</a>
        </div>
      </section>

      <!-- Publication Item -->
      <section class="publication-item">
        <h3>Coded Computation Across Shared Heterogeneous Works With Communication Delay</h3>
        <p class="authors">
          Y. Sun, Fan Zhang, Junlin Zhao, S. Zhou, Z. Niu and D. Gündüz, “Coded Computation Across Shared Heterogeneous Works With Communication Delay”, <em>IEEE Trans. on Signal Processing</em>, 70: 3371-3385, 2022
        </p>
        <div class="meta">
          <span>Posted on October 8, 2022 | Tagged Journal | </span>
          <a href="#">Leave a comment</a>
        </div>
      </section>
    </div>
  </AppLayout1>
</template>

<script>
import AppLayout1 from "@/components/AppLayout1.vue";

export default {
  name: 'Publications',
  components: {
    AppLayout1
  },
};
</script>

<style scoped>
.publications {
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
}

.publication-item {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.authors {
  font-size: 16px;
  margin-bottom: 15px;
  color: #555;
}

.meta {
  font-size: 14px;
  color: #888;
}

.meta a {
  color: #007bff;
  text-decoration: none;
}

.meta a:hover {
  text-decoration: underline;
}
</style>
