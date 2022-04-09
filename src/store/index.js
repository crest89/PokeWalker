import axios from 'axios'

export const state = () => ({
  id: null,
  baseUrl: "https://pokeapi.co/api/v2/",
  randamNum: null,
})

export const mutations = {
  regist(state, trainerid) {
    state.id =  trainerid
  },
  setSpeceis(state, speceis) {
    state.species= speceis
  }
}

export const actions = {
  saveTrainerId(context, trainerid) {
    context.commit('regist', trainerid)
  }
}
