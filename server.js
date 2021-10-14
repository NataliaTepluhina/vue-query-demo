const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('Server is running!')
})

router.render = (req, res) => {
  if (req.url === '/characters' && req.method === 'GET') {
    res.jsonp(
      res.locals.data.map((char) => ({
        id: char.id,
        name: char.name,
      }))
    )
  } else {
    res.jsonp(res.locals.data)
  }
}
