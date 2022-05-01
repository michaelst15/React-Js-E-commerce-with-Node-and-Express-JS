function value(){
    for(let i = 1; i <= 15; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('Eduwork')
        } else if(i % 3 === 0 && i != 6){
            console.log('Edu')
        } else if(i % 5 === 0 && i % 2 === 1){
            console.log('Work')
        }
        else{
            console.log(i)
        }
    }
}

value()