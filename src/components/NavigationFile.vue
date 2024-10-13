<template>
  <header class="NavigationFile">
    <div class="Navigation-content">
      <img :src="logoSrc" alt="Logo" class="logo" />

      <nav class="navigation">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/research" class="nav-item">Research</router-link>
        <router-link to="/news" class="nav-item">News</router-link>
        <router-link to="/awards-funds" class="nav-item"
          >Awards & Funds</router-link
        >
        <router-link to="/groups" class="nav-item">Groups</router-link>
        <router-link to="/Publications" class="nav-item"
          >Publications</router-link
        >
        <router-link to="/teaching" class="nav-item">Teaching</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logoSrc: require("@/assets/images/logo.png"),
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = document.querySelector(".NavigationFile");
      if (window.scrollY > 150) {
        header.classList.add("scrolled");
        this.logoSrc = require("@/assets/images/new_logo.jpg");
      } else {
        header.classList.remove("scrolled");
        this.logoSrc = require("@/assets/images/logo.png");
      }
    },
  },
};
</script>

<style scoped>
.NavigationFile {
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  transition: background-color 0.8s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.NavigationFile.scrolled {
  background-color: rgba(
    255,
    255,
    255,
    1
  ); /* 滚动后变为更自然的白色背景，带有轻微透明度 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* 滚动后加上更柔和的阴影 */
}

.Navigation-content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.logo {
  width: 200px;
  height: auto;
  margin-left: 30px;
  transition: transform 0.8s ease;
}

.NavigationFile.scrolled .logo {
  transform: scale(0.9); /* 滚动后 logo 变小一点 */
}

.navigation {
  display: flex;
  justify-content: right;
}

.nav-item {
  color: #ffffff; /* 初始颜色为白色 */
  margin: 0 5px;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  padding: 5px 40px;
  border-radius: 5px;
  transition: color 0.5s ease, text-shadow 0.5s ease, box-shadow 0.5s ease,
    transform 0.5s ease;
}

.NavigationFile.scrolled .nav-item {
  color: #000000; /* 滚动后文字变为黑色 */
  text-shadow: none; /* 移除文字阴影 */
}

.nav-item:hover {
  text-decoration: underline;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}
</style>
