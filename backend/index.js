const app = require('./bin/express')
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Olá mundo')
})

app.listen(port, () => {
  console.log(`Api initilize success in port ${port}`)
})