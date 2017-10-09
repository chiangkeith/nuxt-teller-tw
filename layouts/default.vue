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
    line-height 1.85rem
    font-size 1rem

  h1, h2
    margin 50px 0 10px

  h1, h2, h3
    color rgba(0, 0, 0, 0.5)
  
  h1
    font-size 2.3rem

  h2
    font-size 1.9rem
  h3
    margin 40px 0 10px
    font-size 1.5rem
  img
    width 100vw
    object-fit contain
    margin 20px 0 20px -30px

  strong
    color rgba(22, 95, 52, 0.7)
    display inline
    margin 0 3px
    border-bottom 0 solid #165f34

  p, h1, h2, h3
    padding 0 30px

  @media (min-width: 501px)
    p, h1, h2, h3
      padding 0 15%
    img
      margin 20px auto
      width 100%

  @media (min-width: 769px)
    p
      line-height 2rem
      margin 30px 0
    
    h1, h2
      margin 70px 0 30px
    
    h1
      font-size 2rem
    
    h3
      margin 50px 0 30px

    img
      width 100%
      margin 30px 0

    p, h1, h2, h3
      padding 0

</style>
