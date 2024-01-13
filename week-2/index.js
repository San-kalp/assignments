const express = require('express')


const app = express()
const port = 3000 || process.env.PORT 


var users = [{
    name :'Sankalp',
    kidneys : [{
        healthy:false
    },{
        healthy:true
    }]

}]



app.get("/:name",function(req,res){
    const name = req.params.name
    number_of_kidneys = 0
    status_of_kidneys = []
    for (let i = 0 ; i<users.length; i++){
        if(users[i].name == name){
            number_of_kidneys = users[i].kidneys.length
            for (let j = 0;j< number_of_kidneys;j++){
                status_of_kidneys.push(users[i].kidneys[j])
            }
        }
    }
  
    var jsonData = JSON.stringify({
        number_of_kidneys: number_of_kidneys,
        status_of_kidneys: status_of_kidneys
    });

    res.send(jsonData)
})

app.post('/:name/:statKid',function(req,res){
    const name = req.params.name
    const statKid = req.params.statKid
  
    for (let i = 0 ; i<users.length; i++){
        if(users[i].name == name){
            users[i].kidneys.push({
                healthy:Boolean(statKid)
            })
        res.status(200).send('Added')
        }
    }



})

app.put('/:name/:id',function(req,res){
    const name = req.params.name
    const id = req.params.id
  
    for (let i = 0 ; i<users.length; i++){
        if(users[i].name == name){
            if(users[i].kidneys[id].healthy){
                res.send("No need to change. It is already healthy!!!!")
            }else{
                users[i].kidneys[id].healthy = true 
            }
        res.status(200).send('Added')
        }
    }
})


app.delete('/:name',function(req,res){
    const name = req.params.name

  
    for (let i = 0 ; i<users.length; i++){
        if(users[i].name == name){
            if(!users[i].kidneys[id].healthy){
                
            }
        res.status(200).send('Added')
        }
    }
})





app.listen(port)