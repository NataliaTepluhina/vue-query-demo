import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
})

export const getCharacters = () => {
  return instance.get('/characters')
}
