<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <a href="/">
          <img src="/img/common/logo.svg" alt="">
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "src/assets/style/variables";

.header{
  padding: 40px 0 35px;
  background: $color-white;
  box-shadow: 0 8px 16px 0 #00000014;

  @media screen and (max-width: 600px){
    padding: 24px 0;
  }
}
</style>