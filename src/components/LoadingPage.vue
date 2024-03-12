<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { servicesContent } from '../data';
import { handleImgName, iconUrl } from '../utils';

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true
  },
  isActiveVideo: {
    type: Boolean,
    default: false
  }
})

const iconName = ref<string>("");

const randomIcon = () => {
  const iconMap = servicesContent.map(item => item.name);
  const rndNum = Math.floor((Math.random() * iconMap.length));

  return iconUrl(handleImgName(iconMap[rndNum]));
}

onMounted(() => {
  iconName.value = randomIcon();
})

</script>

<template>
<div id="loadingPage" :class="{ 'hidden': !props.isLoading }">
  <div class="innerBox">
    <img :class="{ 'bounce': !props.isActiveVideo }" :src="iconName" alt="">
    <span :class="{ 'flash': !props.isActiveVideo }">Loading...</span>
  </div>
</div>
</template>

<style scoped>
#loadingPage {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  transition: opacity 1s;
}

#loadingPage.hidden {
  opacity: 0;
  pointer-events: none;
}

.innerBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

span {
  margin-top: 18px;
  display: inline-block;
  color: #888888;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 4px;
}

</style>