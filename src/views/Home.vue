<template>
  <div class="CatList">
    <ul class="CatList__list">
      <li v-for="(cat) in cats"  :key="cat.id"  class="CatList__item">
          <Cat  
          :title='cat.id' 
          :like='cat.like'
          :urlImage='cat.url' />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import Cat from '../components/Cat'
    export default {
      components: {
           Cat,
      },
      created () {
          this.getCats();
      },
      methods: {
        ...mapActions([
          'getCats'
        ]),
      },
      computed: {
        ...mapGetters  ({
             cats: 'catsList',
        })
      } 
    }
</script>


<style lang="scss" >
@import "../assets/scss/_variables.scss";

  .CatList {
    margin:0 auto;
    &__list {
      display: flex;
      flex-wrap:wrap;
      list-style-type: none;
      padding:0;
    }
    &__item {
    
    }
  }

  @media screen and (min-width: $bp-sm)  {
      .CatList {
        &__item {
          width:calc(50% - 8px);
          margin: 0 4px 15px 4px;
        }
      }
  }

  @media screen and (min-width: $bp-md) {
    .CatList {
        &__item {
          width:calc(25% - 8px);
        }
      }
  }
</style>
