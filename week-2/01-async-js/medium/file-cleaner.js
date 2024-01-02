const fs = require('fs')


function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile('a.txt','utf-8',function(err,data){
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

function cleaner(data){
    //Clean the data 
    data = data.replace(/\s+/g,' ').trim()
    //write back to the file
    return new Promise(function(resolve,reject){
        fs.writeFile('a.txt',data,'utf-8',function(err){
            if (err){
                reject(err)
            }else{
                resolve(data)
                console.log("Cleaned!!!")
            }
        })
    })

}

readFileAsync().then(cleaner).catch(function(err){
    console.log(err)
})