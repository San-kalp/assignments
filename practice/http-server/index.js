const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT||3000


app.use(bodyParser.json())
app.post('/', function(req, res)  {
  console.log(req.body['name']) 
  console.log(req.query.message) 
  res.send('Hello World!')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})

