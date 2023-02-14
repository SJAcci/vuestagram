<template>
    <div>
        <Post :feed="a" v-for="(a,i) in feed" :key="i"/>
    </div>
</template>
<script>
import Post from './Post.vue';
export default {
    // eslint-disable-next-line
    name: 'Container',
    props: {
        feed: Array,
    },
    components: {
        Post,
    }
}
</script>
<style>
    
</style