<template>
  <div class="cat">
    <h2 class="cat__name">{{title}}</h2>
    <div class="cat__wrapLike">
      <div class="cat__heart"></div>
      <div class="cat__like" >{{like}}</div>
    </div>   
    <img class="cat__image" :src="urlImage" :alt="title">
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      urlImage: {
        type: String
      },
      like: {
        type:Number
      }
    },
  }
</script>

<style lang="scss" >
@import "../assets/scss/_variables.scss";
.cat {
  position:relative;
  &__image {
    max-width:100%;
  }
  &__wrapLike {
    position:absolute;
    right:0;
    top:20px;
    display: flex;
    
  }
  &__heart {
    position:relative;
    width:10px;
    height:10px;
    background:red;
    display: block;
    transform: rotate(45deg); 
    margin: 0 auto;
    &:before {
      content:'';
      position:absolute;
      bottom:0px;
      left:-5px;
      width:10px;
      height:10px;
      border-radius:50%;
      background:red;
      display: block;
    }
    &:after {
       content:'';
      position:absolute;
      top:-5px;
      right:0px;
      width:10px;
      height:10px;
      border-radius:50%;
      background:red;
        
    }
    
  }
  &__like {
      color:$color-text;
      font-size:12px;
      font-weight:bold;
      margin-left:5px;
    }
}

</style>
