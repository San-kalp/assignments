function tesssss(){
    var users = [{
        name :'Sankalp',
        kidneys : [{
            healthy:false
        },{
            healthy:true
        }]
    
    }]

    users[0].kidneys.push({
        healthy:true
    })

    return users[0].kidneys[3]

}


console.log(tesssss())

