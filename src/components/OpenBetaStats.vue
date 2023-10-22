<template>
  <h4 v-if="loading">Loading...</h4>
  <h4 v-if="error">Error</h4>
  <p v-else>
    Total Crags: {{ stats.totalCrags }}
    Total Climbs: {{ stats.totalClimbs }}
  </p>
</template>
  
<script>
import { computed } from 'vue'
import { OPEN_BETA_STATS_QUERY } from '../constants/graphql.js'
import { useQuery } from '@vue/apollo-composable'

export default {
  name: 'OpenBetaStats',
  setup() { 
    const { result, loading, error } = useQuery(OPEN_BETA_STATS_QUERY);
    console.log(result);
    const stats = computed(() => result.value?.stats ?? [])

    return {
      stats,
      loading,
      error
    }
  }
}
</script>