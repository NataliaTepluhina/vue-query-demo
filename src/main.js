import { createApp, h } from 'vue'
import { useQueryProvider } from 'vue-query'
import App from './App.vue'

createApp({
  render() {
    return h(App)
  },
  setup() {
    useQueryProvider()
  },
}).mount('#app')
