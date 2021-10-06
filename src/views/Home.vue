<script>
import { ref } from 'vue'

export default {
  setup() {
    const isLoading = ref(false)
    const isError = ref(false)
    const characters = ref([])

    return {
      isLoading,
      characters,
      isError,
    }
  },
}
</script>

<template>
  <p v-if="isError">Error!</p>
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
