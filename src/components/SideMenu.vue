<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(["open"]);

const anTargetName = ref<string>("");
const anActive = (e: any) => anTargetName.value = e.target.classList[e.target.classList.length - 1];
const anStop = () => anTargetName.value = "";

</script>

<template>
<div id="sideMenuContainer" :class="{ 'open': props.open }">
  <div class="scrollContainer">
    <div class="sideMenu">
      <img class="sideMenuLogo" src="../assets/sideMenuLogo.png" alt="">
      <div class="closeIcon" @click="emits('open', false)"></div>
      <div class="sideMenu-bg"></div>

      <div class="menuGroup mt-60">
        <div class="mb-40 menuItem about" @mouseenter="anActive" @mouseleave="anStop">
          <img :class="{ 'bounce': anTargetName === 'about' }" src="../assets/side_menu/sideMenuIcon-about.png" alt="about">
          <div class="menuItemDes">
            <span>EMPOWERING BRANDS</span>
            <p class="fw-700">ABOUT US</p>
          </div>
        </div>
        <div class="menuItem works" @mouseenter="anActive" @mouseleave="anStop">
          <img :class="{ 'bounce': anTargetName === 'works' }" src="../assets/side_menu/sideMenuIcon-works.png" alt="works">
          <div class="menuItemDes works">
            <span>CASE STUDIES</span>
            <p class="fw-700">WORKS</p>
          </div>
        </div>
      </div>

      <div class="menuGroup mx-42">
        <div class="mb-40 menuItem careers" @mouseenter="anActive" @mouseleave="anStop">
          <img :class="{ 'bounce': anTargetName === 'careers' }" src="../assets/side_menu/sideMenuIcon-careers.png" alt="careers">
          <div class="menuItemDes">
            <span>BE COOL WITH US</span>
            <p class="fw-700">CAREERS</p>
          </div>
        </div>
        <div class="menuItem insights" @mouseenter="anActive" @mouseleave="anStop">
          <img :class="{ 'bounce': anTargetName === 'insights' }" src="../assets/side_menu/sideMenuIcon-insights.png" alt="insights">
          <div class="menuItemDes works">
            <span>OUR STRATEGIES</span>
            <p class="fw-700">INSIGHTS</p>
          </div>
        </div>
      </div>

      <div class="menuGroup mt-60">
        <div class="mb-40 menuItem services" @mouseenter="anActive" @mouseleave="anStop">
          <img :class="{ 'bounce': anTargetName === 'services' }" src="../assets/side_menu/sideMenuIcon-services.png" alt="services">
          <div class="menuItemDes">
            <span>AREAS OF EXPERTISE</span>
            <p class="fw-700">SERVICES</p>
          </div>
        </div>
        <div class="menuItem contact">
          <div class="menuItemDes">
            <span>START YOUR JOURNEY WITH US</span>
            <p class="fw-700">CONTACT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
#sideMenuContainer {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100vh;
  opacity: 0;
  pointer-events: none;
  transition: opacity .5s;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 130px 0 96px;
  overflow-y: hidden;
}

#sideMenuContainer.open {
  opacity: 1;
  pointer-events: initial;
}

.scrollContainer {
  overflow-y: scroll;
  height: 100%;
}

.sideMenu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sideMenuLogo {
  position: absolute;
  top: 40px;
  left: 60px;
}

.closeIcon {
  position: absolute;
  right: 64px;
  top: 48px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}

.closeIcon:before, .closeIcon:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  top: 50%;
  left: 50%;
  background: #FFFFFF;
}

.closeIcon:before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.closeIcon:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.mb-40 {
  margin-bottom: 40px;
}

.mx-42 {
  margin: 0 42px;
}

.mt-60 {
  margin-top: 60px;
}

.sideMenu-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: -1;
  background: linear-gradient(180deg, #585880 3.61%, #26C6D0 95.7%);
}

.menuGroup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menuItem {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}

.menuItem.about {
  background-image: url('../assets/side_menu/sideMenuItemBg-about.png');
  padding: 78px 67px 60px 37px;
}

.menuItem.works {
  background-image: url('../assets/side_menu/sideMenuItemBg-works.png');
  padding: 194px 124px 60px 26px;
}

.menuItem.careers {
  background-image: url('../assets/side_menu/sideMenuItemBg-careers.png');
  padding: 240px 70px 48px 30px;
  flex-direction: column;
  align-items: flex-start;
}

.menuItem.insights {
  background-image: url('../assets/side_menu/sideMenuItemBg-insights.png');
  padding: 72px 68px 48px 36px;
  flex-direction: column;
  align-items: flex-start;
}

.menuItem.services {
  background-image: url('../assets/side_menu/sideMenuItemBg-services.png');
  padding: 122px 142px 48px 42px;
  flex-direction: column;
  align-items: flex-start;
}

.menuItem.contact {
  background: #FFFFFF;
  padding: 72px 56px 72px 42px;
  border-radius: 24px;
}

.menuItem.contact p {
  color: #26C6D0;
}

.menuItem.contact span {
  color: #262626;
}


.menuItem img {
  margin-right: 28px;
}

.menuItem.careers img {
  margin-bottom: 28px;
}

.menuItem.insights img, .menuItem.services img {
  margin-bottom: 15px;
}

.menuItemDes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.menuItemDes p {
  font-size: 32px;
  letter-spacing: 3.5px;
}

.menuItemDes span {
  font-size: 16px;
  letter-spacing: 1.8px;
}

.menuItemDes p:before {
  bottom: 16px;
}

.menuItemDes.works p:before {
  background: #26C6D0;
}

@media (max-width: 1100px) {
  .sideMenu {
    flex-direction: column;
  }

  .mx-42 {
    margin: 0;
  }

  .mt-60 {
    margin-top: 0;
  }

  .mb-40 {
    margin-bottom: 0;
  }

  .menuItem {
    margin-bottom: 30px;
  }

  .menuGroup.menuItem:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 525px) {
  #sideMenuContainer {
    padding: 120px 10px 80px;
  }

  .menuItemDes p {
    font-size: 24px;
  }

  .menuItemDes span {
    font-size: 14px;
  }
}

@keyframes bounce {
    20% { transform:translateY(0%); }
    30% { transform:translateY(-20%); }
    40% { transform:translateY(0%); }
    45% { transform:translateY(-10%); }
    47% { transform:translateY(0%); }
    49% { transform:translateY(-5%); }
    50% { transform:translateY(0); }
}

.bounce {
  animation: bounce 2s both ease infinite;
}

</style>
