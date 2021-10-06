import { createApp, h } from 'vue'
import { useQueryProvider, QueryClient } from 'vue-query'
import router from './router'
import store from './store'
import App from './App.vue'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20000,
    },
  },
})

createApp({
  render() {
    return h(App)
  },
  setup() {
    useQueryProvider(queryClient)
  },
})
  .use(router)
  .use(store)
  .mount('#app')
