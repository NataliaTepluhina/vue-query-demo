import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
})

export const getCharacters = () => {
  return instance.get('/characters')
}

export const getCharacter = (id) => {
  return instance.get(`/characters/${id}`)
}

export const addCharacter = (newCharacter) => {
  return instance.post('/characters', newCharacter)
}
