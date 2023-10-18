// import './assets/main.css'

import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import router from './router'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://api.openbeta.io?eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjI2QmNrWTBwWHRSZVExd0x5cFptYSJ9.eyJodHRwczovL3RhY29zLm9wZW5iZXRhLmlvL3JvbGVzIjpbImVkaXRvciJdLCJodHRwczovL3RhY29zLm9wZW5iZXRhLmlvL3V1aWQiOiI3NmRmOTE4NC04Y2EwLTQwOTAtYmNiMy1kZDU0OGQwZTU0OWYiLCJpc3MiOiJodHRwczovL29wZW5iZXRhLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NTI4NjI0MDI1ZjNmNjU2ZmJhYTQzZDYiLCJhdWQiOlsiaHR0cHM6Ly9vcGVuYmV0YS51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vb3BlbmJldGEudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5NzE5ODAzOCwiZXhwIjoxNjk5NzkwMDM4LCJhenAiOiJHT2pVMHQ3amNzUERyMVlkN09yVEtPeXdZeWd5UzF0TCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgcmVhZDpjdXJyZW50X3VzZXIgY3JlYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIn0.NhajTbyrfkvLci3gg49qCH-ct7GYGz35SHckTpQW3k8pqFZMtDaUBwFw1lBte7CkAUTs3HS7nh75x01rg8ICSxjQnscqIrcUxLvh3iE8jusIMzkTWbQVrsrNNyLo6Gu8sJhfFdHHCapieLZACRNBI9U5TdR9ZOh0mRmlhXPfcNUEm2aI1F_6TV1T1WaV7XdZeHzyIZvOndeB6c-E-4i6_leAv5UQJRuPcCeSOX_rt0RyCslAbq_N7ppT2kW3unca6XNh3zV1OCPgFzb9yIQn8dWbH6m-iNSrmflCPi4u1OuFcWDrE4WWE0vle9fUF9TFE8Gum0r5lxIYeCJsr4MD5A',
  headers: {
    'api_key': import.meta.env.API_KEY,
  },
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(router)

app.mount('#app')
