<script>
import { computed } from 'vue'
import { useQuery, useMutation } from 'vue-query'
import { getCharacters, addCharacter } from '../api'

export default {
  setup() {
    const { isLoading, data, error } = useQuery('characters', getCharacters)

    const characters = computed(() => data?.value.data)

    const newChar = {
      id: '11',
      name: 'Feyd-Rautha Harkonnen',
    }

    const { mutate } = useMutation((newCharacter) => addCharacter(newCharacter))

    return {
      isLoading,
      characters,
      error,
      mutate,
      newChar,
    }
  },
}
</script>

<template>
  <p v-if="error">Error!</p>
  <div v-else-if="isLoading">Loading...</div>
  <template v-else>
    <router-link
      :to="{ name: 'character', params: { id: character.id } }"
      v-for="character in characters"
      :key="character.id"
      class="block"
    >
      {{ character.name }}
    </router-link>
  </template>
  <button @click="mutate(newChar)">Add new character</button>
</template>

<style scoped>
.block {
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}
</style>
