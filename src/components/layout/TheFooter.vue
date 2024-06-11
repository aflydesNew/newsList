<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__logo">
        <a href="/">
          <img src="/img/common/logo.svg" alt="">
        </a>
      </div>
      <p class="footer__copyrights">
        © alpha, 2023
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped >
@import "src/assets/style/variables";

.footer{
  padding: 64px 0;
  flex: 0 0;
  background: $color-hawkes-blue;

  @media screen and (max-width: 600px){
    padding: 24px 0;
  }

  &__copyrights{
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    color: $color-black-40;
  }
}
</style>