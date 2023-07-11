const express = require('express')

const app = express()

const port = process.env.PORT || 3000;


app.get('/', (req, res) => res.send('Hello from CHIRAG node image!'))

app.listen(PORT, () => console.log('Server ready'))
