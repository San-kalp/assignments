const fs = require('fs')

// function sankalpReadFile(callback){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         callback(data)
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// sankalpReadFile(onDone)


//Promises are syntactical sugars only 

// function sankalpReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile('a.txt','utf-8',function(err,data){
//             resolve(data)
//         })
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// sankalpReadFile().then(onDone)


// function sankalpAsyncFunction(){
//     let p = new Promise(function(resolve){
//         resolve("Hi there")
//     })

//     return p
// }




// const value = sankalpAsyncFunction()
// value.then(function(data){
//     console.log(data)
// })


function sankalpAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("Hi there")
    })
    return p;
}


function onDone(data){
    console.log(data)
}

function main(){
    sankalpAsyncFunction().then(onDone)
}

main()