import { createStore } from 'vuex'
import { getCharacter, getCharacters } from './api'

export default createStore({
  state() {
    return {
      characters: [],
      isLoading: false,
      isError: false,
    }
  },
  mutations: {
    setLoadingState(state) {
      state.isLoading = true
      state.isError = false
    },
    setErrorState(state) {
      state.isLoading = false
      state.isError = true
    },
    setCharacters(state, payload) {
      state.characters = payload
      state.isLoading = false
    },
    setCharacter(state, payload) {
      const currentCharacter = state.find((char) => char.id === payload.id)
      currentCharacter = payload.data
      state.isLoading = false
    },
  },
  actions: {
    async fetchCharactersList({ commit }) {
      commit('setLoadingState')
      try {
        const result = await getCharacters()
        commit('setCharacters', result.data)
      } catch {
        commit('setErrorState')
      }
    },
    fetchCharacter() {},
  },
})
