<template>
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input placeholder="🔍" />
      <div class="post-header" v-for="(a, i) in follower" :key="i" >
        <div class="profile" :style="`background-image: url(${follower[i].image})`"></div>
        <span class="profile-name">{{follower[i].name}}</span>
      </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
export default {
    //eslint-disable-next-line
    name: 'mypage',
    setup(){
        let follower = ref([]);

        onMounted(()=>{
            axios.get('/follower.json').then(a=>{
                follower.value = a.data
            })
        })

        return { follower }
    }
}
</script>
<style>
    
</style>