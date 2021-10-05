<script>
import { computed } from 'vue'
import { useQuery } from 'vue-query'
import { getCharacters } from '../api'

export default {
  setup() {
    const { isLoading, data, error } = useQuery('characters', getCharacters)

    const characters = computed(() => data?.value.data)

    return {
      isLoading,
      characters,
      error,
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
</template>

<style scoped>
.block {
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}
</style>
