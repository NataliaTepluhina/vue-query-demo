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

    const { isLoading, data, error } = useQuery(
      ['character', characterId],
      () => getCharacter(characterId)
    )

    const character = computed(() => data?.value?.data)

    return { character }
  },
}
</script>

<template>
  {{ character }}
</template>
