<template>
  <div class="Cat">
    <div class="Cat__wrapper">
      <h2 class="Cat__name">{{title}}</h2>
      <div class="Cat__wrapLike">
        <div class="Cat__heart"></div>
        <div class="Cat__like" >{{like}}</div>
      </div>
    </div>
       
    <img class="Cat__image" :src="urlImage" :alt="title">
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
    }
    
  }
</script>

<style lang="scss" >
@import "../assets/scss/_variables.scss";
.Cat {
  position:relative;
  margin-bottom:30px;
  &__image {
    max-width:100%;
  }
  &__wrapLike {
    display: flex;
    
  }
  &__name {
    margin: 0 5px 20px 0;
    font-size: 32px;
    color:$color-text;
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
  &__wrapper {
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: $bp-sm)  {
        
  .Cat {
    &__image {
      max-height:200px;
    }
  }
}

</style>
