const net = require('net')

const IP = process.argv[2]

if (!IP) {
  console.error(`Usage: ${process.argv[0]} ${process.argv[1]} <IP>`)
  process.exit(1)
}

const client = new net.Socket()
client.connect(8000, IP, () => {
  client.on('data', data => process.stdout.write(data))
  client.on('error', err => { console.error(err) })
})
