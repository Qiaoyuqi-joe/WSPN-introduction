<template>
  <AppLayout>
    <div class="home">
      <!-- Lab News Section -->
      <section class="news-section">
        <div class="section-header">
          <h2>Lab News</h2>
        </div>
        <div class="news-container">
          <div class="news-image">
            <img src="@/assets/images/news_image.jpg" alt="News Image" class="main-news-image" />
            <div class="news-caption">
              <p>President Xi Jinping Visits Purple Mountain Laboratory | Contributing to High-Level Technological Independence</p>
            </div>
          </div>
          <div class="news-list">
            <ul>
              <li><span>24</span> 2024-09 - The 4th Cybersecurity Development Conference - Call for Papers</li>
              <li><span>20</span> 2024-09 - Aspire High, Reach New Heights - Purple Mountain Laboratory 2025 Recruitment</li>
              <li><span>03</span> 2024-09 - Spend a Happy Summer at PML</li>
              <li><span>23</span> 2024-08 - The First Major National Science and Technology Infrastructure in China's Information and Communication Field</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Research Highlights Section -->
      <section class="research-section">
        <div class="section-header">
          <h2>Research Highlights</h2>
          <a href="/research" class="view-more">View More</a>
        </div>
        <div class="carousel-container">
          <button class="prev-btn" @click="prevSlide"> < </button>
          <div class="carousel">
            <div
              class="carousel-item"
              v-for="(item, index) in researchItems"
              :key="index"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <img :src="item.image" :alt="item.title" class="carousel-image" />
              <div class="carousel-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <div class="carousel-footer">
                  <span class="date">{{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
          <button class="next-btn" @click="nextSlide"> > </button>
        </div>
      </section>

      <!-- Welcome Section -->
      <section class="welcome-section">
        <div class="section-header">
          <h2>Welcome</h2>
        </div>
        <p class="welcome-content">
          The rapid development of wireless communication technologies has changed people's lives in many ways. However, to further enhance the network capacity and operation efficiency, the future wireless networks, e.g., 5G networks, still face a lot of technical challenges, which leave many open problems for the researchers.
        </p>
        <p class="welcome-content">
          The Network Integration for Ubiquitous Linkage And Broadband lab (NIULAB) is dedicated to the research in a broad field of wireless communications and networks, including network traffic control and performance analysis, resource allocation and cross-layer design, cooperative communications, green communications and networks, and future network infrastructure design.
        </p>
        <p class="welcome-content">
          <strong>For the students who are interested in joining the lab, please refer to <a href="#">Q&A</a> for more information.</strong>
        </p>
      </section>

      <!-- Contact Info Section -->
      <section class="contact-section">
        <div class="section-header">
          <h2>Contact Info</h2>
        </div>
        <p class="contact-content">
          FIT Building 3-326~3-329 & Rohm Building 8-205<br />
          Tsinghua University, Beijing, 100084, China<br />
          Secretary: Xu Ping<br />
          Phone No.: +86-10-62773634<br />
          Email: <a href="mailto:xuping811@tsinghua.edu.cn">xuping811@tsinghua.edu.cn</a>
        </p>
      </section>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/AppLayout.vue';

export default {
  name: 'Home',
  components: {
    AppLayout
  },
  data() {
    return {
      currentSlide: 0,
      researchItems: [
        {
          image: require('@/assets/images/research1.jpg'),
          title: "A Decade of Future Network Development - Strengthening the Foundation for a Strong Network Nation",
          description:
            "With reform and innovation, future network technologies have undergone over a decade of development, becoming China's first major scientific infrastructure in the field of information and communication...",
          date: "2024-08-19"
        },
        {
          image: require('@/assets/images/research2.jpg'),
          title: "Preview of the 8th Future Network Development Conference: Leading Technological Innovations",
          description:
            "Future network technologies have undergone over a decade of development, becoming China's first major scientific infrastructure in the field of information and communication...",
          date: "2024-08-16"
        },
        {
          image: require('@/assets/images/research3.jpg'),
          title: "Call for Papers: The 4th Intrinsic Security Development Conference",
          description:
            "As the digital economy continues to grow and digital transformation deepens, traditional digital ecosystems face challenges in fundamental driving paradigms...",
          date: "2024-09-24"
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.researchItems.length - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  padding: 15px;
  background-color: #ffffff;
  color: #333;
}

.news-section {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.section-header {
  color: #151440;
  padding: 1px;
  border-radius: 2px;
  border-bottom: 2px solid #151440;
  margin-bottom: 5px;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin: 15px 5px;
  color: #151440;
  text-align: center;
}

.news-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-image {
  width: 60%;
  position: relative;
}

.main-news-image {
  width: 100%;
  border-radius: 10px;
}

.news-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

.news-list {
  width: 35%;
}

.news-list ul {
  list-style: none;
  padding: 0;
}

.news-list li {
  margin-bottom: 10px;
  font-size: 16px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, font-size 0.3s ease;
  cursor: pointer;
}

.news-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  font-size: 18px;
}

.news-list span {
  font-weight: bold;
  color: #151440;
  font-size: 20px;
  margin-right: 10px;
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  transition: transform 0.5s ease;
  flex-shrink: 0;
}

.carousel-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-content {
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.carousel-content h3 {
  font-size: 18px;
  color: #151440;
  margin-bottom: 10px;
  text-align: center;
}

.carousel-content p {
  font-size: 14px;
  color: #666;
  text-align: center;
}

.carousel-footer .date {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
  text-align: center;
  display: block;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #1e90ff;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.prev-btn:hover,
.next-btn:hover {
  background-color: #0f74c5;
}

.welcome-section, .contact-section {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #ffffff;
}

.welcome-content, .contact-content {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 15px;
  text-align: justify;
}

.group-photo {
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
}
</style>