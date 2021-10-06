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
      let currentCharacterIndex = state.characters.findIndex(
        (char) => char.id === payload.id
      )
      state.characters[currentCharacterIndex] = payload.data
      console.log(state.characters)
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
    async fetchCharacter({ commit }, id) {
      commit('setLoadingState')
      try {
        const result = await getCharacter(id)
        commit('setCharacter', { id, data: result.data })
      } catch {
        commit('setErrorState')
      }
    },
  },
  getters: {
    getCharacterById: (state) => (id) => {
      return state.characters.find((char) => char.id === id)
    },
  },
})
