

<template>
    <div class="CatVote">
        <transition 
            appear
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOutUp">
            <div class="alert" v-if="show" >Vous avez votez pour <span>{{nameCate}}</span></div>
        </transition>
         <div><p>Clic sur le chat que tu trouves le plus mignons</p></div>
         <ul class="CatVote__wrap" >    
            <li :class="{ 'disabled': isdisabled }" @click.prevent="vote(cat)"  
                v-for="(cat,index) in twoCats"  
                :key="index"  
                class="CatVote__item">
                    <Cat  
                    :key="index"
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
        data() {
            return {
                nameCate: '',
                show:false,
                isdisabled:false
            }
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
                'getCats',
                'getTwoCats',
                'updateCat'
            ]),
            vote(cat) {
                this.isdisabled = true; // can't vote
                this.updateCat(cat);
                this.nameCate = cat.id
                this.show = true;
                setTimeout( () => this.afterVote(),2000);
            },
            afterVote() {
                this.getTwoCats();
                this.show = false;
                this.isdisabled = false;
            }
        }
      
    }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
    .CatVote {
       
        &__wrap {
            list-style-type: none;
            padding:0;
            margin:0;
            display: flex;
          
            flex-direction: column;
            justify-content: center;
        }
        &__item {
            cursor: pointer;
             padding: 20px;
            &:nth-child(even) {
                background-color:#7FAB89;
            }
            &:nth-child(odd) {
                background-color:#97CAA3;
            }
            &.disabled {
                pointer-events: none;
            }
        }
    }
    .alert {
        padding: 10px;
        font-size: 14px;
        color:#fff;
        background-color: $color-primary;
        position: absolute;
        top:80px;
        right:10%;
        width:200px;
        margin-left:-150px;
        span {
            font-weight:bold;
            font-size: 20px;
        }
    }

    @media screen and (min-width: $bp-sm)  {
        .CatVote {
            &__wrap {
                flex-direction: row;
            }
            &__item {
            width:calc(50% - 10px);
            
            }
        }
        .alert { 
            top:20px;
        }
    }

    @media screen and (min-width: $bp-md) {
    
    }
</style>