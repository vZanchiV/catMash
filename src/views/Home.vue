

<template>
    <div>
        Page Vote
         <ul class="CatList__list" >
            <li   @click.prevent="vote(cat)"  v-for="(cat,index) in twoCats"  :key="index"  class="CatList__item">
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
            if(this.cats.length < 1) {
                this.getCats();
            }
        },
        computed: {
            ...mapGetters  ({
                cats: 'catsList',
                twoCats:'twoCats'
            }),
        },
        methods: {
            ...mapActions([
                'getCats'
            ])
        },
      
    }
</script>

<style lang="scss" scoped>

</style>