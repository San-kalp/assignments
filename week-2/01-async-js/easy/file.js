const fs = require('fs')

function sankalpFileAsyncFunction(){
    return new Promise(function(resolve){
        fs.readFile('a.txt','utf-8',function(err,data){
            resolve(data)
        })
    })
}



sankalpFileAsyncFunction().then(function(data){
    console.log(data)
})

