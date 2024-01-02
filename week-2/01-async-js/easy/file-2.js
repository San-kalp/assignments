const fs = require("fs")


function writeToFileAsync(content){
    return new Promise(function(resolve,reject){
        fs.writeFile("/sankalp/output.txt",content,"utf-8",function(err){
            if(err){
                reject(err)
            }else{
                resolve("Wrote successfully")
            }
        })
    })
}

let content = "Hi my name is Sankalp and I will buy mercedes by June 2024"
writeToFileAsync(content).then(function(message){
    console.log(message)
}).catch(function(err){
    console.log(err)
})