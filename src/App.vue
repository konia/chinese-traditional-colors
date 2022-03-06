<script setup>
import { ref, computed } from "vue"
import { color_plate } from './assets/color-plate'
import { rgbToHsl } from './utils'
import Header from './Header.vue'

const state = ref("RGB");

const changeMode = computed(() => {
  return (mode) => {
    console.log(mode);
    console.log(state.value);
    switch (state.value) {
      case "RGB":
        return `rgb(${mode})`
      case "HSL":
        return `hsl(${rgbToHsl(mode)})`;
      default:
        return mode
    }
  }


})

const changeTab = (params) => {
  state.value = params;
  console.log("params", params);
}
</script>

<template>
  <Header :tabs="['RGB', 'HEX', 'HSL']" @onChange="changeTab"></Header>
  <main>
    <ul class="color-card">
      <li v-for="color in color_plate" :key="color.pinyin">
        <div class="color-info">
          <div class="color-mode-name">{{ state }}</div>
          <div class="color-name">{{ color.name }}</div>
          <div
            class="color-value"
          >{{ changeMode(state == "HEX" ? color.HEX.toUpperCase() : color.RGB) }}</div>
        </div>
        <div class="color-plate" :style="{ backgroundColor: color.HEX }"></div>
      </li>
    </ul>
  </main>
</template>