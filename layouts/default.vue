<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="stylus">
html
  font-family -apple-system,Microsoft JhengHei,Segoe UI,Roboto,Ubuntu,Droid Sans,Helvetica Neue,sans-serif
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.post
  p
    margin 30px 0
    line-height 2rem
    font-size 1rem

  h1, h2
    margin 70px 0 30px

  h1, h2, h3
    color rgba(0, 0, 0, 0.5)
  
  h1
    font-size 2.3rem

  h2
    font-size 1.9rem
  h3
    margin 50px 0 30px
    font-size 1.5rem
  img
    width 100%
    object-fit contain
    margin 30px 0

  strong
    // font-weight normal
    color rgba(22, 95, 52, 0.7)
    display inline
    margin 0 3px
    border-bottom 0 solid #165f34
    // transition border-bottom
    // &:hover
    //   border-bottom 1px solid #165f34
</style>
