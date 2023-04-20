import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 0,
      likeClicked: false,
      more: {}
    }
  },
  mutations: {
    chgName(state){
      state.name = 'park'
    },
    chgAge(state, data){
      state.age+=data
    },
    chgLike(state){
     if(state.likeClicked == false){
      state.likes++
      state.likeClicked = true
     }else{
      state.likes--
      state.likeClicked = false
     }
    },
    setMore(state, data){
      state.more = data
    }
  },
  actions: {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data)
      })
    }
  }
})

export default store