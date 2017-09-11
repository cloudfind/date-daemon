const net = require('net')

const server = net.createServer((socket) => {
  const id = setInterval(() => {
    try {
      socket.write(new Date().toISOString() + '\r\n')
    } catch (exc) {
      clearInterval(id)
      console.error(exc)
    }
  }, 1000)
  socket.on('error', (err) => {
    clearInterval(id)
    console.error(err)
  })
})
server.on('error', err => console.error(err))
server.listen(8000, '0.0.0.0')
