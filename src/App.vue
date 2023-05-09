<template>
<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="tabIdx++" v-if="tabIdx == 1">Next</li>
      <li @click="publish" v-if="tabIdx == 2">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>{{ name }}  {{ age }}  {{ likes }}</p>
  <h4>이름 : {{ $store.state.name }}</h4>
  <h5>나이 : {{ $store.state.age }}</h5>
  <button @click="$store.commit('chgName')">이름변경</button>
  <button @click="chgAge(10)">나이변경</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <Container :feed="feed" :tabIdx="tabIdx" :imgURL="imgURL" :myFilter="myFilter" @write="myFee
   = $event"/>

  <!-- <button @click="more">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload"/>
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <button @click="tabIdx = 0">버튼0</button>
 <button @click="tabIdx = 1">버튼1</button>
 <button @click="tabIdx = 2">버튼2</button>

</template>

<script>
import Container from './components/Container.vue';
import feed from './assets/feed.js';
import axios from 'axios';
import {mapState} from 'vuex';
import { mapMutations } from 'vuex';
// axios.post()

export default {
  //eslint-disable-next-line
  name: 'App',
  data(){
    return{
      feed: feed,
      idx: -1,
      tabIdx: 3,
      imgURL : '',
      myFeedContent: '',
      myFilter : '',
    }
  },
  mounted(){
    this.emitter.on('filterClick', (a)=>{
 
      this.myFilter = a

      console.log(this.myFilter)
    });
  },
  components: {
    Container,
  },
  computed: {
    name(){
      return this.$store.state.name
    },
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ 내이름 : 'name' })
  },
  methods:{
    ...mapMutations(['setMore', 'chgAge']),

    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.idx+=1}.json`)
      .then(obj=>{
        //요청 성공시 실행할 코드 작성
        console.log(obj.data)
        this.feed.push(obj.data)
      })
      .catch((err)=>{
        //요청 실패시 실행할 코드 작성
        console.log(err)
      })
    },
    upload(e){
      let uploadedFile = e.target;

      if(uploadedFile.files[0]){
        this.imgURL = window.URL.createObjectURL(uploadedFile.files[0]);

        console.log(this.imgURL)

        this.tabIdx++;
      }



    },
    publish(){
      var myFeed = {
        name: "thisMan",
        userImage: "https://placeimg.com/200/200/people",
        postImage: this.imgURL,
        likes: 20,
        date: "Apr 20",
        liked: false,
        content: this.myFeedContent,
        filter: "clarendon"
      }
      this.feed.unshift(myFeed)

      this.tabIdx = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
