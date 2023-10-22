import gql from 'graphql-tag'

export const OPEN_BETA_STATS_QUERY = gql`
  query OpenBetaStatsQuery {
    stats {
      totalClimbs
      totalCrags
    }
  }
`