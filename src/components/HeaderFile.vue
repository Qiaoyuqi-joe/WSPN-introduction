<template>
    <header class="HeaderFile">
    <div class="carousel" @mouseover="clearInv" @mouseout="runInv">
      <div class="carousel-container" :style="{ transform: `translateX(-${nowIndex * 100}%)` }">
        <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide.src" :alt="slide.alt" class="carousel-image" />
        </div>
      </div>
    </div>
</header>
  </template>
  
  <script>
  export default {
    name: 'CarouselComponent',
    data() {
      return {
        slides: [
        { src: require('@/assets/images/slide1.jpg'), alt: 'Slide 1' },
      { src: require('@/assets/images/slide2.jpg'), alt: 'Slide 2' },
      { src: require('@/assets/images/slide3.jpg'), alt: 'Slide 3' }
        ],
        nowIndex: 0,
        invId: null
      };
    },
    methods: {
      runInv() {
        this.invId = setInterval(() => {
          this.nowIndex = (this.nowIndex + 1) % this.slides.length;
        }, 3000);
      },
      clearInv() {
        clearInterval(this.invId);
      }
    },
    mounted() {
      this.runInv();
    },
    beforeDestroy() {
      clearInterval(this.invId);
    }
  };
  </script>
  
  <style scoped>
  .HeaderFile {
    height:500px;
  }
  .carousel {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-slide {
    min-width: 100%;
    height: 100%;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>