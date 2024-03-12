<script setup lang="ts">
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import LoadingPage from './components/LoadingPage.vue'

import { ref, onMounted, watch } from 'vue';
import { delay } from './utils';

const isLoading = ref<boolean>(true);
const isActiveVideo = ref<boolean>(false);

const transformAnim = async () => {
  await delay(4000);
  isActiveVideo.value = true;
  await delay(1000);
  isLoading.value = false;
}

onMounted(() => {
  transformAnim();
})

watch(isLoading, (val: boolean) => {
  val ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'auto'
}, { immediate: true })

</script>

<template>
<LoadingPage :isLoading="isLoading" :isActiveVideo="isActiveVideo" />
<Intro :videoActive="isActiveVideo" />
<About />
<Services />
<Experience />
<Projects />
</template>
