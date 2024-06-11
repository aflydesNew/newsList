<template>
 <div class="layout">
   <the-header />
   <div class="container">
     <page-hero
      title="Новости"
     />
     <news-grid/>
   </div>
   <the-footer />
 </div>
</template>
<script setup lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import PageHero from './components/common/PageHero.vue'
import NewsGrid from "./components/common/NewsGrid.vue";
</script>

<style lang="scss" scoped>
.layout{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.wrapper{
  flex: 1 1;
}
</style>