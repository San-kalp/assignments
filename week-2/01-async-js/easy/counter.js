function counter(){
    let count = 0
    setInterval(function(){
        console.log(count++)
    },1000)
}

counter()

