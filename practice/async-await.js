function sankalpAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there")
        },5000)
        
    })
    return p;
}


async function main(){
    let value = await sankalpAsyncFunction()
    console.log(value)
    console.log("Hi there!")
}

main()

console.log("After main")