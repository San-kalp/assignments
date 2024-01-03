const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const port = process.env.PORT || 3000
const fs = require('fs')


const app = express();


  
app.use(bodyParser.json());



app.get('/todos',function(req,res){
    fs.readFile('todo.json','utf-8',function(err,data){
        res.send(data)
    })
})


app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});