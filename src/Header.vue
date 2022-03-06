<script setup>
import { ref } from 'vue'
// import { defineEmits, defineProps } from 'vue'
// defineEmits和defineProps在<script setup>中自动可用，无需导入
// 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】
const active = ref(0)
// 声明props
defineProps({ tabs: Array })

// 声明事件
const emit = defineEmits(['onChange'])

const onChange = (params, index) => {
  active.value = index;
  emit('onChange', params)
}
</script>

<template>
  <header>
    <div class="tabs">
      <div
        class="tabs__active-bar"
        :style="{
          'transform': active ? 'translateX(' + (active * 100) + '%)' : ''
        }"
      ></div>

      <div
        v-for="(tab, index) in tabs"
        class="tab"
        @click="onChange(tab, index)"
        :key="index"
      >{{ tab }}</div>
    </div>
  </header>
</template>
