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

app.post('/todos',function(req,res){
    const id = uuidv4()
    let newTodo = {
        "id":id,
        "title":req.body.title,
        "descr":req.body.descr,
    }

    fs.readFile('todo.json','utf-8',function(err,data){
        if(err){
            res.status(500).send("Failed")
        }
        const todos = JSON.parse(data)
        console.log(todos)
        todos.push(newTodo)

        fs.writeFile('todo.json',JSON.stringify(todos),'utf-8',function(err){
            if (err){
                res.status(500).send("Error")
            }else{
                res.send("Successfully written")
            }
        })

    })

})


app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});