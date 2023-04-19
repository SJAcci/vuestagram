import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 0
    }
  },
  mutations: {
    chgName(state){
      state.name = 'park'
    },
    chgAge(state, data){
      state.age+=data
    },
    chgLike(state, data){
      data += 1
      state.likes = data
      console.log(data)
    }
  }
})

export default store