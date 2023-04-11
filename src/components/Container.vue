<template>
    <div>
        <div v-if="tabIdx == 0">
            <Post :feed="a" v-for="(a,i) in feed" :key="i"/>
        </div>
  
        <!-- 필터선택페이지 -->
        <div v-if="tabIdx == 1">
            <div :class="myFilter + ' upload-image'" :style="`background-image: url(${imgURL})`"></div>
            <div class="filters">
                <FilterBox :imgURL="imgURL" :filter="filter" v-for="filter in filters" :key="filter">
                    {{filter}} <!-- slot 사용하는 방법 -->
                </FilterBox>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="tabIdx == 2">
            <div class="upload-image" :style="`background-image: url(${imgURL})`"></div>
            <div class="write">
                <textarea class="write-box" placeholder="write!" @input="$emit('write', $event.target.value)"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue'

export default {
    // eslint-disable-next-line
    name: 'Container',
    data(){
        return{
            filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
        }
    },
    components: {
        Post,
        FilterBox
    },
    props: {
        feed: Array,
        tabIdx: Number,
        imgURL: String,
        myFilter : String,
    },
    methods: {

    }
}

</script>
<style>
    .upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
    }
    .filters{
    overflow-x:scroll;
    white-space: nowrap;
    }
    .filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    }
    .filters::-webkit-scrollbar {
    height: 5px;
    }
    .filters::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    .filters::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
    }
    .filters::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
    .write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
    }
</style>