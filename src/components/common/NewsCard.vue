<template>
  <div class="news-card">
    <a
        v-if="card.image"
        :href="card.link"
        class="news-card__image"
    >
      <img :src="card.image" alt="">
    </a>
    <div class="news-card__content">
      <div class="news-card__date">
        <span class="news-card__date-day">{{ newsDate.day }}</span>
        <span class="news-card__date-month">{{ newsDate.month }}</span>
        <span class="news-card__date-year">{{ newsDate.year }}</span>
      </div>
      <h3 class="news-card__title typo-xl">
        <a :href="card.link">{{ card.name }}</a>
      </h3>
      <p class="news-card__text typo-l">{{ card.previewText }}</p>
      <div class="news-card__tags">
        <a :href="`/${card.type.xmlId}`" class="news-card__tag tag">
          {{ card.type.value }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INews } from "../../types/api";
import moment from 'moment';
import {computed} from "vue";

const props = defineProps({
  card: {
    type: Object as () => INews,
    default: () => {}
  }
})

const newsDate = computed(() => {
  const splitDate = moment(props.card.date * 1000).format('DD MMMM YYYY').split(' ')
  return {
    day: splitDate[0],
    month: splitDate[1],
    year: splitDate[2],
  }
})
</script>

<style lang="scss" scoped>
@import "/src/assets/style/variables";

.news-card{
  display: flex;
  flex-direction: column;
  border: 1px solid $color-primary;
  border-radius: 12px;
  overflow: hidden;

  &__image{
    max-height: 250px;

    & img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content{
    padding: 32px;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 1024px){
      padding: 24px;
    }
  }

  &__date{
    width: fit-content;
    display: grid;
    gap: 0 4px;
    color: $color-black-30;
    &-day{
      grid-column: 1;
      grid-row-start: 1;
      grid-row-end: 3;
      font-size: 36px;
      font-weight: 400;
      line-height: 36px;
    }
    &-month{
      grid-column: 2;
      grid-row: 1;
      font-size: 15px;
      font-weight: 700;
      line-height: 16.5px;
      letter-spacing: -0.01em;
    }
    &-year{
      grid-column: 2;
      grid-row: 2;
      font-size: 15px;
      font-weight: 700;
      line-height: 16.5px;
      letter-spacing: -0.01em;
    }
  }

  &__title{
    color: $link-color-default;
  }

  &__text{
    margin-bottom: 24px;
    color: $color-black-85;
    @media screen and (max-width: 600px){
      margin-bottom: 8px;
    }
  }

  &__tags{
    margin-top: auto;
  }
}
</style>