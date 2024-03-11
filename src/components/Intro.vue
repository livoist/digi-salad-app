<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import SideMenu from '../components/SideMenu.vue';
import { YoutubeBackground } from "vue3-youtube-background";
import "vue3-youtube-background/dist/style.css";
import { delay } from '../utils';

const introHeight = ref<number>(0);
const windowHeight = computed(() => introHeight.value === 0 ? '100vh' : `${ introHeight.value }px`);

const isOpenSideMenu = ref<boolean>(false);
const updateOpen = (val: boolean) => isOpenSideMenu.value = val;

let aboutBlockPos = ref<number>(0);
const videoShow = ref<boolean>(false);

const showVideo = async () => {
  await delay(1500);
  videoShow.value = true;
}

onMounted(() => {
  window.addEventListener("resize", (e: any) => {
    introHeight.value = e.target.innerHeight;
  })

  const aboutBlock: Element | null = document.querySelector("#about .title");

  if (aboutBlock !== null) {
    aboutBlockPos.value = aboutBlock.getBoundingClientRect().top;
  }

  showVideo()
})

watch(isOpenSideMenu, (val: boolean) => {
  val ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'auto'
})

const scrollToAbout = () => {
  window.scrollTo({
    top: aboutBlockPos.value,
    behavior: "smooth"
  })
}

</script>

<template>
<SideMenu :open="isOpenSideMenu" @open="updateOpen" />

<section id="intro" :style="{ 'height': windowHeight }" >
  <header>
    <div class="btn-startProject fw-700">START YOUR PROJECT</div>
    <div class="sideMenuBtn" @click="isOpenSideMenu = true">
      <span></span>
    </div>
  </header>
  
  <div class="mask" :class="{ 'hidden': videoShow }"></div>
  
  <div class="content">
    <div class="decorator">
      <span class="line"></span>
      <p>DIGITAL AGENCY</p>
    </div>
    <div class="introContents">
      <img class="logo" src="../assets/logo.png" alt="logo">
      <div class="slogan fw-700">
        <p>WE CREATE</p>
        <p>AMAZING</p>
        <p class="highlightText intro">DIGITAL EXPERIENCES</p>
      </div>
    </div>
  </div>

  <div
    class="scrollDownGroup fw-700"
    :class="{ 'scroll-active': aboutBlockPos !== 0 }"
    @click="scrollToAbout"
  >
    <img src="../assets/scrollDown.png" alt="scrollDown">
    <p>TASTE US NOW!</p>
  </div>

  <div class="introBackgroundVideo" :class="{ 'active': videoShow }">
    <youtube-background video-id="8_4JRK4QkqU" />
  </div>
</section>
</template>

<style scoped>
.introBackgroundVideo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  z-index: -1;
  opacity: 0;
  transition: 1s;
}

.introBackgroundVideo.active {
  opacity: 1;
}

#intro {
  position: relative;
  background: url('../assets/BG.jpg') no-repeat 50%;
  background-size: cover;
  width: 100%;
  height: 100vh;
  border-radius: 0 0 60px 60px;
  overflow: hidden;
  z-index: 1;
}

header {
  position: relative;
  z-index: 2;
  padding: 40px 50px 0 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  width: 100%;
  height: 100vh;
  border-radius: 0 0 50px 50px;
  transition: 1s;
}

.mask.hidden {
  opacity: 0;
}

.btn-startProject {
  background: linear-gradient(90deg, #4EE5EA 3.94%, #26D0A8 94.73%);
  border-radius: 24px;
  text-align: center;
  font-size: 14px;
  margin-right: 44px;
  letter-spacing: 1.14px;
  cursor: pointer;
  padding: 13px 16px;
}

.sideMenuBtn {
  position: relative;
  width: 30px;
  height: 22px;
  cursor: pointer;
}

.sideMenuBtn span {
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background: #FFFFFF;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.sideMenuBtn:after, .sideMenuBtn:before {
  content: "";
  position: absolute;
  height: 3px;
  border-radius: 2px;
  background: #FFFFFF;
  right: 0;
}

.sideMenuBtn:after {
  bottom: 0;
  width: 85%;
}

.sideMenuBtn:before {
  top: 0;
  width: 100%;
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  margin: 98px 0 0 71px;
}

.introContents {
  position: relative;
  text-align: left;
  display: inline-block;
}

.logo {
  margin-bottom: 34px;
}

.slogan {
  font-size: 38px;
  letter-spacing: 9.16px;
  line-height: 70px;
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

.highlightText.intro:after {
  bottom: 16px;
}

.highlightText.intro:after {
  border: 4px solid #26C6D0;
}

.decorator {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 144px;
  margin-top: 68px;
}

.decorator > p {
  letter-spacing: 2px;
}

.line {
  width: 2px;
  height: 113px;
  background: #FFFFFF;
  margin-bottom: 24px;
}

.scrollDownGroup {
  font-size: 14px;
  letter-spacing: 2px;
  position: absolute;
  bottom: 75px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  pointer-events: none;
  filter: grayscale(0.9);
}

.scrollDownGroup:after, .scrollDownGroup:before {
  content: "";
  position: absolute;
  width: 1px;
  left: 50%;
  transform: translateX(-50%);
}

.scrollDownGroup:before {
  height: 44px;
  bottom: -74px;
  background: #FFFFFF;
}

.scrollDownGroup img {
  margin-bottom: 11px;
}

.scrollDownGroup.scroll-active {
  pointer-events: initial;
  cursor: pointer;
  filter: grayscale(0);
}

.if-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
  border-radius: 0 0 80px 80px;
  pointer-events: none;
}

.if-innerContainer {
  position: relative;
  padding-bottom: 56.2%;
  height: 0;
}
		
#video-intro {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

@media (max-width: 848px) {
  .content {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 80px 40px;
  }

  .decorator {
    transform: rotate(0);
    writing-mode: initial;
    margin-top: 0;
    margin-bottom: 50px;
    margin-right: 0;
    flex-direction: column-reverse;
  }

  .decorator .line {
    width: 100%;
    height: 2px;
    margin-bottom: 0;
  }

  .introContents {
    text-align: center;
  }
}

@media (max-width: 700px) {
  .slogan {
    font-size: 20px;
    line-height: 2;
    letter-spacing: 4px;
  }

  .btn-startProject {
    display: none;
  }
}

</style>
