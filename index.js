const express = require('express')

const app = express()




app.get('/node', (req, res) => res.send('Hello from CHIRAG node image!'))

app.listen(3000, () => console.log('Server ready'))
