import { createApp, h } from 'vue'
import { useQueryProvider } from 'vue-query'
import router from './router'
import App from './App.vue'

createApp({
  render() {
    return h(App)
  },
  setup() {
    useQueryProvider()
  },
})
  .use(router)
  .mount('#app')
