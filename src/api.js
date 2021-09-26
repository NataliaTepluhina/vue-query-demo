import axios from 'axios'

export const getCharacters = () => {
  return axios.get('https://rickandmortyapi.com/api/charac1ter')
}
