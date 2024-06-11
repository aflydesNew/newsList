<template>
  <div class="page-hero">
    <div class="page-hero__background">
      <img :src="imgSrc" alt="">
    </div>
    <div class="page-hero__content">
      <h1 class="page-hero__title typo-h1">{{ title }}</h1>
    </div>
  </div>
</template>
<script setup lang="ts">

defineProps({
  title: String,
  imgSrc: {
    type: String,
    default: '/img/common/hero-background.jpg',
  }
})
</script>

<style lang="scss" scoped>
.page-hero {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 600px){
    min-height: 240px;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 100%;
    transform: translate(-50%, 0);
    pointer-events: none;
    z-index: -1;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 48px 0;

    @media screen and (max-width: 600px){
      padding: 24px 0;
    }
  }
}
</style>