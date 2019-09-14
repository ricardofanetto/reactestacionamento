const app = require('./bin/express')
const port = 3333

app.listen(port, () => {
  console.log(`Api initilize success in port ${port}`)
});