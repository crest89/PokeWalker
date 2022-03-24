import createPersistedState from 'vuex-persistedstate'

export default({ store }) => {
  createPersistedState({
    key: 'id',
    paths: ['id'],
  })(store)
}
