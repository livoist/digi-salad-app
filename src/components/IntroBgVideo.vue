<script setup lang="ts">
import { YoutubeBackground } from "vue3-youtube-background";
import "vue3-youtube-background/dist/style.css";
</script>

<template>
<div class="introBackgroundVideo">
  <youtube-background video-id="8_4JRK4QkqU" />
</div>
</template>

<style>
.introBackgroundVideo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  z-index: -1;
  transition: 1s;
}
</style>