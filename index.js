// server.js
const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000


server.db = router.db
server.use(auth)
server.use(middlewares)
server.use(router)
server.listen(port, () => {
	console.log('JSON Server is running ' + port)
})