<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="stylus">
html
  font-family -apple-system,Microsoft JhengHei,Segoe UI,Roboto,Ubuntu,Droid Sans,Helvetica Neue,sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  overflow-x hidden
  width 100vw

body
  overflow-x hidden
  width 100%

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
    margin 30px 0 15px
    line-height 1.85rem
    font-size 1rem

  h1, h2
    margin 50px 0 10px

  h1, h2, h3
    color rgba(0, 0, 0, 0.5)
    a
      &, &:hover, &:link, &:visited
        line-height inherit
        font-size inherit
        height inherit
        white-space normal
        display inline
  
  h1
    font-size 2.3rem

  h2
    font-size 1.9rem
  h3
    margin 50px 0 10px
    font-size 1.5rem
  img
    object-fit contain
    width 99vw
    margin 20px 0 20px -30px

  .img
    width 99vw
    margin 20px 0 20px -30px
    img
      width 100%

  strong
    color rgba(22, 95, 52, 0.7)
    display inline
    margin 0 3px
    border-bottom 0 solid #165f34

  blockquote
    margin 30px 0
    background-color rgba(0, 0, 0, 0.05)
    padding 20px 10px
    display flex
    justify-content center
    flex-direction column
    align-items center

    p
      font-size 0.9rem
      margin 0
      width 100%

  em
    color rgba(0, 0, 0, 0.5)
    font-style normal

  pre
    line-height 1.5rem
    font-size 1rem

    box-sizing border-box
    width 100%
    padding 0
    overflow auto
    overflow-y hidden
    padding 10px

    white-space pre-wrap
    white-space -moz-pre-wrap
    white-space -o-pre-wrap
    word-wrap break-word

    border-radius 5px
    -moz-border-radius 5px
    -webkit-border-radius 5px
    margin 30px 0

    background-color #000000
    color #d6ff8b

    text-align left

    > code
      font-family Courier, 'New Courier', monospace
      background-color transparent
      padding 10px

  code
    background-color rgba(97, 183, 135, 0.2)
    font-size 0.9rem
    padding 2px 5px

  ul, ol
    line-height 1.6rem
    padding 0 50px
    font-size 0.9rem
    color rgba(0, 0, 0, 0.7)
    margin 30px 0

    > li
      margin-top 0.5rem
      
      p
        font-size 0.9rem
        line-height 1.6rem
        padding 0

      > ul, ol
        padding 0 0 0 20px
        margin 15px 0 0

  p, h1, h2, h3
    padding 0 30px

  a
    &, &:hover, &:link, &:visited
      text-decoration none
      color rgba(0, 0, 0, 0.5)
      display inline-block
      max-width 45%
      vertical-align top
      text-overflow ellipsis
      overflow hidden
      white-space nowrap

      border-bottom 1px solid rgba(0,0,0,.2)
      line-height 1.85rem
      font-size 0.9rem
      height 1.5rem

      margin 0 2px

  @media (min-width: 501px)
    p, h1, h2, h3
      padding 0 15%
    ul, ol
      padding 0 18%
    .img, img
      margin 20px auto 0
      width 100%
    p
      margin 60px 0 15px
    blockquote
      padding 20px 15%
      p, ul, ol
       padding 0

  @media (min-width: 769px)
    html
      overflow-x auto
      width auto
    body 
      overflow-x auto
      width auto

    p
      line-height 2rem
      margin 40px 0
    
    h1, h2
      margin 90px 0 30px
    
    h1
      font-size 2rem
    
    h3
      margin 90px 0 30px

    .img, img
      width 100%
      margin 30px auto 0

    p, h1, h2, h3
      padding 0
    
    blockquote
      padding 50px

</style>
