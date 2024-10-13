<template>
  <AppLayout1 :pageTitle="'Teaching'">
    <div class="teaching">
      <!-- Course Item -->
      <section class="course-item">
        <h3>Advanced Networking</h3>
        <p class="details">
          <strong>Department and Year:</strong> School of Computer Science, First-year Master
        </p>
        <p class="details">
          <strong>Instructor:</strong> Prof. Zhou Sheng
        </p>
      </section>

      <!-- Course Item -->
      <section class="course-item">
        <h3>Machine Learning for Communication Systems</h3>
        <p class="details">
          <strong>Department and Year:</strong> School of Electronic Information, Second-year Master
        </p>
        <p class="details">
          <strong>Instructor:</strong> Prof. Zhang Chengjie
        </p>
      </section>

      <!-- Course Item -->
      <section class="course-item">
        <h3>Introduction to Data Science</h3>
        <p class="details">
          <strong>Department and Year:</strong> School of Information Engineering, Third-year Undergraduate
        </p>
        <p class="details">
          <strong>Instructor:</strong> Dr. Wang Haolun
        </p>
      </section>

      <!-- Course Item -->
      <section class="course-item">
        <h3>Artificial Intelligence and Applications</h3>
        <p class="details">
          <strong>Department and Year:</strong> School of Automation, First-year Master
        </p>
        <p class="details">
          <strong>Instructor:</strong> Prof. Fang Sijia
        </p>
      </section>

      <!-- Course Item -->
      <section class="course-item">
        <h3>Cloud Computing and Edge Intelligence</h3>
        <p class="details">
          <strong>Department and Year:</strong> School of Communication Engineering, First-year PhD
        </p>
        <p class="details">
          <strong>Instructor:</strong> Prof. Huang Xiaoyan
        </p>
      </section>
    </div>
  </AppLayout1>
</template>

<script>
import AppLayout1 from "@/components/AppLayout1.vue";

export default {
  name: 'Teaching',
  components: {
    AppLayout1
  },
};
</script>

<style scoped>
.teaching {
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
}

.course-item {
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

.details {
  font-size: 16px;
  margin-bottom: 5px;
}

.details strong {
  font-weight: bold;
}
</style>
