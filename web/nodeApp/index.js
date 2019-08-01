const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

content = fs.readFileSync('../static/content.txt')

app.get('/', (req, res) => res.send(`${content}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))