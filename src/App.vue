<script setup>
import { ref, computed } from "vue"
import { useRouter, useRoute } from 'vue-router'
import Header from './Header.vue'
const router = useRouter()
const route = useRoute()
const state = ref("RGB");

const changeTab = (params) => {
  state.value = params;
}
</script>
<template>
  <Header
    :tabs="route.meta.tabs"
    @onChange="changeTab"
    :title="route.query.name"
    :back="route.meta.back"
  ></Header>
  {{ route.query.name }}
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component" :state="state" />
    </transition>
  </router-view>
</template>