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

app.put('/todo/:id',function(req,res){
    let index = 0 
    let id = req.params.id
    function sankalpReadFile(){
        return new Promise(function(resolve){
            fs.readFile('todo.json','utf-8',function(err,data){
                if (err){
                    res.status(500).send("Failed to update the given todo")
                }else{
                    todos=JSON.parse(data)
                    for (let i = 0 ; i < todos.length; i++){
                        if(todos[i].id == id){
                            index = i
                            console.log("Inside",index)
                            resolve(index)
                        }
                    }
    
                }
            })
            
        })

}
    sankalpReadFile().then(assign)


    function assign(value){
        index = value
    }
    console.log("Outside",index)

    if (index == -1){
        res.status(500).send("Index not found")
    }else {
        fs.readFile('todo.json','utf-8',function(err,data){
            todos = JSON.parse(data)
            todos[index].title = req.body.title
            todos[index].descr = req.body.descr
            fs.writeFile('todo.json',JSON.stringify(todos),'utf-8',function(err){
                if (err){
                    res.status(500).send("Index found but failed")
                }else{
                    res.status(200).send("Successfully updated")
                }
            })
        })
    }
})


app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});