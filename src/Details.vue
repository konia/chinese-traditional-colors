<script setup>
import { ref, computed } from "vue"
import { useRouter, useRoute } from 'vue-router'
import { rgbToHsl } from './utils'

const route = useRoute()
const color = ref(route.query)

</script>

<template>
  <section>
    <main>
      <div class="color-panel">
        <div class="color-base" :style="{ color: color.HEX }"></div>
        <div class="color-name">
          {{color.name}}
        </div>
        <div class="color-value">
          {{color.pinyin.toUpperCase()}}
        </div>
      </div>
      <ul class="color-card">
        <li>
          <div class="color-value">
            {{color.HEX.toUpperCase()}}
          </div>
          <div class="color-mode">
            HEX
          </div>
        </li>
        <li>
          <div class="color-value">
            {{color.RGB.toString()}}
          </div>
          <div class="color-mode">
            RGB
          </div>
        </li>
        <li>
          <div class="color-value">
            {{rgbToHsl(color.RGB).toString()}}
          </div>
          <div class="color-mode">
            HSL
          </div>
        </li>
      </ul>
    </main>
  </section>
  <!-- {{ route.params.name }} -->
</template>

