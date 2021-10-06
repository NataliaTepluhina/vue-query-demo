<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      isLoading: computed(() => store.state.isLoading),
      characters: computed(() => store.state.characters),
      isError: computed(() => store.state.isError),
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
