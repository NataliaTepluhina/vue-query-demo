import axios from 'axios'

export const getCharacters = () => {
  return axios.get('http://localhost:4000/characters')
}
