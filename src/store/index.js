import axios from 'axios'

export const state = () => ({
  id: null,
  baseUrl: "https://pokeapi.co/api/v2/",
  randamNum: null
})

export const mutations = {
  regist(state, trainerid) {
    state.id =  trainerid
  }
}

export const actions = {
  saveTrainerId(context, trainerid) {
    context.commit('regist', trainerid)
  },
  async fetchPokemoData ({ state, commit, dispach }) {
    try {
      result = await axios.get(`${state.baseUrl}pokemon-species/${this.randamNum}`)
    } catch {
      alert('通信エラーが発生しました。')
    }
  }
}
