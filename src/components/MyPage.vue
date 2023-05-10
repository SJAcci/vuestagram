<template>
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input placeholder="🔍" />
      <div class="post-header" v-for="(a, i) in follower" :key="i" >
        <div class="profile" :style="`background-image: url(${a.image})`"></div>
        <span class="profile-name">{{a.name}}</span>
      </div>
    </div>
</template>
<script>
import {  onMounted, ref } from 'vue';
// import { computed, onMounted, ref, toRefs, watch } from 'vue';
import axios from 'axios';
// import { useStore } from 'vuex';
export default {
    //eslint-disable-next-line
    name: 'mypage',

    props: {
        one: Number,
    },

    setup(){
        let follower = ref([]);
        // let {one} = toRefs(props)
        // console.log(one.value)

        // watch(one, ()=>{
        //     console.log(one.value)
        // })
        // let result = computed(()=>{ return follower.value.length})
        // console.log(result.value)

        // let store = useStore()
        // console.log(store.state.name)

        function doThis(){

        }

        onMounted(()=>{
            axios.get('/follower.json').then(a=>{
                follower.value = a.data
            })
        })

        return { follower, doThis }
    }
}
</script>
<style>
    
</style>