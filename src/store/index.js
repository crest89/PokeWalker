export const state = () => ({
  id: null
})

export const mutations = {
  regist(state, trainerid) {
    state.id =  trainerid
  }
}

export const actions = {
  saveTrainerId(context, trainerid) {
    context.commit('regist', trainerid)
  }
}
