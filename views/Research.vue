<template>
  <AppLayout1 :pageTitle="'Research Field'">
    <div class="research">
      <!-- Connected & Moving Intelligence for Smart & Green 6G Section -->
      <section class="intelligence-section">
        <section class="smart-society-section">
          <h3>Smart Society in 2030</h3>
          <ul>
            <li>Everything connected to share information & intelligence</li>
            <li>Moving vehicles provide seamless connectivity & edge intelligence</li>
            <li>Greening 5G/6G for carbon-neutral & sustainable development</li>
          </ul>
          <div class="images-container">
            <img src="@/assets/images/research1.jpg" alt="Mobile Things/Society" class="content-image" />
          </div>
        </section>

        <section class="timely-status-update-section">
          <h3>Timely Status Update in Remote Control Systems</h3>
          <ul>
            <li>Remotely controlled systems demand fresh status information</li>
            <li>Information delay = sensing + communication + computing delays</li>
            <li>From Age-of-Information (AoI) to Urgency-of-Information (UoI)</li>
          </ul>
          <img src="@/assets/images/research1.jpg" alt="Timely Status Update" class="content-image" />
        </section>

        <section class="smile-section">
          <h3>Send More Information with Less Energy (SMILE)</h3>
          <ul>
            <li>Reduce energy waste by adapting to real-traffic dynamics (REWARD)</li>
            <li>Smart interaction between energy flows & information flows</li>
            <li>AI in right time, at right places, and for right purpose</li>
          </ul>
          <img src="@/assets/images/research1.jpg" alt="SMILE" class="content-image" />
        </section>

        <section class="meet-section">
          <h3>Mobility-Enhanced Edge inTelligence (MEET)</h3>
        </section>
      </section>
    </div>
  </AppLayout1>
</template>

<script>
import AppLayout1 from "@/components/AppLayout1.vue";

export default {
  name: 'Research',
  components: {
    AppLayout1
  },
};
</script>

<style scoped>
.research {
  width: 100%;
  padding: 15px;
  background-color: #ffffff;
  color: #333;
}

.section-header {
  color: #151440;
  padding: 1px;
  border-radius: 2px;
  border-bottom: 2px solid #151440;
  margin-bottom: 15px;
  text-align: center;
}

h3 {
  font-size: 22px;
  color: #151440;
  margin-bottom: 10px;
  text-align: left;
}

ul {
  list-style: disc;
  padding-left: 20px;
  font-size: 16px;
  line-height: 1.8;
}

.images-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.content-image {
  width: 50%;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
}
</style>