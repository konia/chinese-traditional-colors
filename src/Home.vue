<script setup>
import { ref, computed, nextTick } from "vue"
import { useRouter, useRoute } from 'vue-router'

import { color_plate } from './assets/color-plate'
import { rgbToHsl } from './utils'

const router = useRouter()
const route = useRoute()

defineProps({ state: String })

// const statement = ref(state);

// const changeMode = computed((state) => {
//   console.log("state111", state);
//   return (mode) => {
//     if (state) {
//       switch (state) {
//         case "RGB":
//           return `rgb(${mode})`
//         case "HSL":
//           return `hsl(${rgbToHsl(mode)})`;
//         default:
//           return mode
//       }
//     }
//   }
// })



const goToDetails = (color) => {
  router.push({
    name: 'Details',
    params: {
      name: color.pinyin
    },
    query: {
      ...color
    },
  })
}
</script>

<template>
  <section>
    <main>
      <ul class="color-card">
        <li v-for="color in color_plate" :key="color.pinyin" :class="{ white: rgbToHsl(color.RGB)[2].substr(0,2) < 80 }" @click="goToDetails(color)" :style="{ backgroundColor: color.HEX }">
        <!-- <div class="color-plate" ></div> -->
          <div class="color-info">
            <div class="color-mode-name">{{ state }}</div>
            <div class="color-name">{{ color.name }}</div>
            <div class="color-value">
              <span v-if="state == 'HEX'">{{ state == "HEX" && color.HEX.toUpperCase() }}</span>
              <span v-else-if="state == 'RGB'">{{ state == "RGB" && `rgb(${color.RGB})` }}</span>
              <span v-else>{{ state == "HSL" && `hsl(${rgbToHsl(color.RGB)})` }}</span>
            </div>
          </div>
          
        </li>
      </ul>
    </main>
  </section>
</template>