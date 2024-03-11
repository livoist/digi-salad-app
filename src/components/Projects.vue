<script setup lang="ts">
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { delay } from '../utils';

const projectCarousel = ref<any>(null);
const totalSlide = ref<number>(0);
const currSlide = ref<number>(0);
const linkChanged = ref<boolean>(false);

const initCarousel = () => totalSlide.value = projectCarousel.value.data.slidesCount.value;
const slideStart = (data: any) => {
  currSlide.value = data.slidingToIndex;
  updateLink();
};
const updateLink = async () => {
  linkChanged.value = true;
  await delay(1300);
  linkChanged.value = false;
}

</script>

<template>
<section id="projects">
  <div class="slideHint">
    <span class="currSlideOrder">0{{ currSlide + 1 }}</span>
    <span class="slash"></span>
    <span class="totalSlideOrder">0{{ totalSlide }}</span>
  </div>

  <div class="carouselContainer">
    <div class="btn-view project" :class="{ 'linkChanged': linkChanged }">
      <p>VIEW PROJECT</p>
      <span></span>
    </div>

    <div class="switch prev" :class="{ 'prevent': currSlide === 0 }" @click="projectCarousel.prev">
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.08424 0.000413261C1.72953 -0.0073884 1.3812 0.0954378 1.08768 0.294755C0.794161 0.494071 0.570034 0.780027 0.446463 1.11261C0.322891 1.44519 0.306014 1.80796 0.398178 2.15058C0.490342 2.4932 0.686967 2.79845 0.960717 3.02415L11.4058 11.9723L0.960717 20.9173C0.771351 21.0565 0.612761 21.2332 0.494879 21.4365C0.376997 21.6398 0.302364 21.8654 0.275651 22.0988C0.248939 22.3323 0.270723 22.5688 0.33964 22.7935C0.408557 23.0181 0.523121 23.2262 0.67616 23.4046C0.829198 23.5829 1.01741 23.7276 1.22902 23.8298C1.44062 23.9321 1.67106 23.9895 1.9059 23.9986C2.14073 24.0076 2.37491 23.9682 2.59376 23.8826C2.81262 23.797 3.01143 23.6671 3.17776 23.5011L15.1365 13.2692C15.3243 13.1089 15.4751 12.91 15.5785 12.6858C15.6819 12.4616 15.7354 12.2176 15.7354 11.9708C15.7354 11.7239 15.6819 11.4799 15.5785 11.2557C15.4751 11.0315 15.3243 10.8324 15.1365 10.6721L3.17776 0.430407C2.87567 0.162078 2.48819 0.00952601 2.08424 1.94939e-05V0.000413261Z" fill="white"/>
      </svg>
    </div>

    <carousel
      @slide-start="slideStart"
      @init="initCarousel"
      ref="projectCarousel"
      :transition="1000"
      class="slideContainer"
    >
      <slide v-for="n in 4" :key="n">
        <div class="slide">
          <img src="../assets/show-case-slide.png" alt="slide">
          <div class="slideDes fw-700">
            <span>HIGHLIGHTED SHOWCASE</span>
            <p class="highlightText projects">LP CLUB MOBILE APP</p>
            <p>Cras quis nulla commodo, aliquam lectus sed, blandit<br />
              augue. Cras ullamcorper bibendum bibendum. Duis<br />
              tincidunt urna non pretium porta. Nam condimentum<br />
              vitae ligula vel ornare. Phasellus at semper turpis.<br />
              Nunc eu tellus tortor. Etiam at condimentum nisl, vitae<br />
              sagittis orci. Donec id dignissim nunc. Donec elit ante,<br />
              eleifend a dolor et, venenatis facilisis dolor. In feugiat<br />
              orci odio, sed lacinia sem elementum quis. Aliquam<br />
              consectetur, eros et vulputate euismod, nunc leo<br />
              tempor lacus, ac rhoncus neque eros nec lacus. Cras<br />
              lobortis molestie faucibus.
            </p>
          </div>
      </div>
      </slide>
    </carousel>

    <div
      class="switch next"
      :class="{ 'prevent': currSlide === 3 }"
      @click="projectCarousel.next"
    >
      <svg
        width="16"
        height="24"
        viewBox="0 0 16 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.08424 0.000413261C1.72953 -0.0073884 1.3812 0.0954378 1.08768 0.294755C0.794161 0.494071 0.570034 0.780027 0.446463 1.11261C0.322891 1.44519 0.306014 1.80796 0.398178 2.15058C0.490342 2.4932 0.686967 2.79845 0.960717 3.02415L11.4058 11.9723L0.960717 20.9173C0.771351 21.0565 0.612761 21.2332 0.494879 21.4365C0.376997 21.6398 0.302364 21.8654 0.275651 22.0988C0.248939 22.3323 0.270723 22.5688 0.33964 22.7935C0.408557 23.0181 0.523121 23.2262 0.67616 23.4046C0.829198 23.5829 1.01741 23.7276 1.22902 23.8298C1.44062 23.9321 1.67106 23.9895 1.9059 23.9986C2.14073 24.0076 2.37491 23.9682 2.59376 23.8826C2.81262 23.797 3.01143 23.6671 3.17776 23.5011L15.1365 13.2692C15.3243 13.1089 15.4751 12.91 15.5785 12.6858C15.6819 12.4616 15.7354 12.2176 15.7354 11.9708C15.7354 11.7239 15.6819 11.4799 15.5785 11.2557C15.4751 11.0315 15.3243 10.8324 15.1365 10.6721L3.17776 0.430407C2.87567 0.162078 2.48819 0.00952601 2.08424 1.94939e-05V0.000413261Z" fill="white"/>
      </svg>
    </div>
  </div>
</section>
</template>

<style scoped>
#projects {
  position: relative;
  padding: 194px 0 252px;
  border-radius: 0 0 40px 40px;
  background: url('../assets/case-bg.png') no-repeat;
  background-position: bottom;
  margin-bottom: 90px;
}

.slideContainer {
  max-width: 78%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50px;
}

.slide {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 20px;
}

.slide img {
  margin-right: 65px;
}

.slideDes {
  text-align: left;
  margin-top: 62px;
}

.slideDes span {
  font-size: 16px;
  letter-spacing: 2px;
}

.highlightText {
  font-size: 32px;
  letter-spacing: 3.5px;
  margin: 20px 0 40px;
}

.highlightText:before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #EE6C8A;
  right: -28px;
  bottom: 12px;
}

.btn-view {
  position: absolute;
  bottom: -88px;
  z-index: 5;
}

.switch {
  width: 56px;
  height: 56px;
  background: #26C6D0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background .5s;
}

.switch.prev {
  transform: rotate(-180deg);
}

.switch.prevent {
  background: gray;
  pointer-events: none;
}

.slideHint {
  position: absolute;
  top: 170px;
  right: 114px;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 600;
  height: 48px;
  display: flex;
  justify-content: center;
}

.slideHint span {
  display: inline-block;
}

.slideHint .slash {
  width: 44px;
  background: #26C6D0;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

.currSlideOrder {
  align-self: start;
  margin-right: 3px;
}

.totalSlideOrder {
  align-self: end;
  margin-left: 3px;
}

.highlightText.projects:after {
  border: 4px solid #26C6D0;
  bottom: 10px;
}

.btn-view.project {
  padding: 60px 34px;
  transition: background .5s;
}

.carouselContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1240px) {
  #projects {
    padding: 70px 0 180px;
  }

  .slideContainer {
    max-width: 75%;
    margin: 0;
  }

  .slide {
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    overflow: hidden;
    margin: 0;
  }

  .slide img {
    margin-right: 0;
  }

  .slideDes {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .btn-view.project {
    bottom: -120px;
    padding: 40px 20px;
  }

  .slideHint {
    position: relative;
    top: 0;
    right: 0;
  }

  .highlightText.projects {
    font-size: 22px;
    letter-spacing: 1px;
  }
}

@media (max-width: 525px) {
  #projects {
    border-radius: 0;
    margin-bottom: 0;
  }

  .slideContainer {
    max-width: 80%;
  }

  .switch {
    width: 28px;
    height: 28px;
  }

  .switch svg {
    width: 8px;
    height: 24px;
  }

  .highlightText.projects:after {
    bottom: 6px;
  }
}

</style>
