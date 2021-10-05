const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const data = require('./db.json')
const filteredData = data.characters.map((char) => ({
  id: char.id,
  name: char.name,
}))

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('Server is running!')
})

router.render = (req, res) => {
  if (req.url === '/characters') {
    res.jsonp(filteredData)
  } else {
    res.jsonp(res.locals.data)
  }
}
