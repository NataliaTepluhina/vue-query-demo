<script>
import { useQuery } from 'vue-query'
import { getCharacters } from '../api'

export default {
  setup() {
    const { isLoading, data, error } = useQuery('characters', getCharacters)

    return {
      isLoading,
      data,
      error,
    }
  },
}
</script>

<template>
  <p v-if="error">Error!</p>
  <div v-else-if="isLoading">Loading...</div>
  <div v-else>{{ data.data }}</div>
</template>
