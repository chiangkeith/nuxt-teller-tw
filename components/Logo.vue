<template>
  <div class="TXTLogo">
  </div>
</template>

<style lang="stylus">

.TXTLogo
  width 100%
  height 100vw
  max-width 426px
  max-height 296px 
  margin 0 auto
  background-repeat no-repeat
  background-size contain
  background-position center center
  background-image url(/icons/txt-logo-2x.png)

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
