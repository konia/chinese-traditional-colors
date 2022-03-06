<script setup>
import { ref, computed } from "vue"
import { useRouter, useRoute } from 'vue-router'
import Header from './Header.vue'

const route = useRoute()
const router = useRouter()

const goToDetails = () => {
  console.log(111);
  router.replace({
    name: 'Home'
  })
}

</script>

<template>
  <section>
    <main>
      <ul class="color-card">
        <li @click="goToDetails">wwwx</li>
      </ul>
    </main>
  </section>
  <!-- {{ route.params.name }} -->
</template>

