<script>
import { computed } from 'vue'
import { useQuery } from 'vue-query'
import { getCharacter } from '../api'

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const characterId = props.id

    const { isLoading, data } = useQuery(['character', characterId], () =>
      getCharacter(characterId)
    )

    const character = computed(() => data?.value?.data)

    return { character, isLoading }
  },
}
</script>

<template>
  <p v-if="isLoading">Loading...</p>
  <article v-else>
    <h2>{{ character.name }}</h2>
    <div class="flex">
      <img class="image" :src="character.image_url" :alt="character.name" />
      <div class="description">
        <p><span class="bold">Faction:</span> {{ character.faction }}</p>
        <p><span class="bold">Born:</span> {{ character.born }}</p>
        <p>{{ character.description }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
p {
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
}

.bold {
  font-weight: bold;
}

.description {
  padding-left: 10px;
  font-size: 18px;
  text-align: left;
}

.flex {
  display: flex;
  max-width: 960px;
  margin: 0 auto;
}

.image {
  max-width: 300px;
}
</style>
