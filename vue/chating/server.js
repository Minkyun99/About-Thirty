const express = require('express')
const { Server } = require('socket.io')

const path = require('path')
const logger = require('morgan')
const http = require('http')
const app = express()

const port = 3000
const _path = path.join(__dirname, './dist')

app.use('/', express.static(_path))
app.use(logger('tiny'))

const server = http.createServer(app)
const io = new Server(server)

/*chating 연결*/
io.on('connection', (socket) => {
  socket.on('chat', (msg) => {
    io.emit('chat', msg)
  })
})

app.post('/nick', (req, res) => {
  const nick_name = req.body.nick
  console.log(nick_name)
  ;(async () => {
    app.get('/nickname', (req, res) => {
      res.send(nick_name)
    })
  })()
})

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
