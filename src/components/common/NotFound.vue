<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-06 10:20:19
 * @LastEditTime: 2022-12-06 16:27:04
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'dyw',
  },
})
</script>

<template>
  <div class="magic relative inline-flex" style="font-size: 36px;">
    <div class="red-s absolute left-0 top-0 overflow-hidden c-red z-3">
      {{ text }}
    </div>
    <div class="c-transparent">
      {{ text }}
    </div>
    <div class="cyan-s absolute left--1px top-0 overflow-hidden c-cyan z-4">
      {{ text }}
    </div>
    <!-- <div class="line absolute z-4 top-0 left-0">
      {{ text }}
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
$slice-0: inset(50% 50% 50% 50%);
$slice-1: inset(80% -6px 0 0);
$slice-2: inset(50% -6px 30% 0);
$slice-3: inset(10% -6px 85% 0);
$slice-4: inset(40% -6px 43% 0);
$slice-5: inset(80% -6px 5% 0);

.magic {
  font-family: Raleway, Verdana, Arial;

  .line {
    background: #000;
    animation: lineMove 3s ease-out infinite;
  }

  .red-s {
    /* clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%); */
    filter: contrast(200%);
    text-shadow: 1px 0 0 red;
    animation: cyanMove 0.95s infinite;
  }

  .cyan-s {
    /* clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%); */
    filter: contrast(200%);
    text-shadow: -1px 0 0 cyan;
    mix-blend-mode: lighten;
    animation: cyanMove 1.1s infinite -0.5s;
  }
}

@keyframes lineMove {
  0% {
    clip-path: $slice-1;
  }
  10% {
    clip-path: $slice-3;
  }

  20% {
    clip-path: $slice-1;
  }

  30% {
    clip-path: $slice-3;
  }

  40% {
    clip-path: $slice-2;
  }

  50% {
    clip-path: $slice-3;
  }

  60% {
    clip-path: $slice-4;
  }

  70% {
    clip-path: $slice-2;
  }

  80% {
    clip-path: $slice-5;
  }

  90% {
    clip-path: $slice-5;
  }

  100% {
    clip-path: $slice-1;
  }
}

@keyframes cyanMove {
  10% {
    top: -0.4px;
    left: -1.1px;
  }

  20% {
    filter: hue-rotate(-90deg);
    top: 0.4px;
    left: -0.2px;
  }

  30% {
    filter: hue-rotate(0);
    left: .5px;
  }

  40% {
    top: -0.3px;
    left: -0.7px;
  }

  50% {
    filter: blur(1px);
    left: 0.2px;
  }

  60% {
    filter: blur(0);
    top: 1.8px;
    left: -1.2px;
  }

  70% {
    top: -1px;
    left: 0.1px;
  }

  80% {
    top: -0.4px;
    left: -0.9px;
  }

  90% {
    left: 1.2px;
  }

  100% {
    left: -1.2px;
  }
}
</style>
