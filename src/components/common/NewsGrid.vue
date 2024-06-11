<template>
  <div class="news">
    <div class="news__grid">
      <news-card
          v-for="card in newsList"
          :key="card.code"
          :card="card"
      />
    </div>
    <button
        v-if="currentPage !== maxPageNumber"
        type="button"
        class="news__button btn btn-blue"
        @click="loadMore"
    >
      Загрузить ещё
    </button>
  </div>
</template>
<script lang="ts" setup>
import NewsCard from "./NewsCard.vue"
import axios from "axios";
import {ref} from "vue";

const newsList = ref()
const currentPage = ref(1);
const maxPageNumber = ref()

const loadMore = () => {
  currentPage.value++;
  axios.get(`https://flems.github.io/test/api/news/${currentPage.value}`)
      .then(response => {
        newsList.value = [...newsList.value, ...response.data.items];
      })
      .catch(error => {
        console.log(error);
      });
};

axios.get(`https://flems.github.io/test/api/news/${currentPage.value}`)
    .then(response => {
      newsList.value = response.data.items;
      maxPageNumber.value = response.data.nav.total
    })
    .catch(error => {
      console.log(error);
    });
</script>

<style lang="scss" scoped>
@import "/src/assets/style/variables";

.news {
  padding: 64px 0 72px;

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 48px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
    }
  }

  &__button {
    margin: 72px auto 0;
  }
}
</style>