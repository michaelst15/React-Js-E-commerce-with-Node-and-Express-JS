let number = [2,7,40,5,3];
let high = Math.max.apply(Math, number);
let low = Math.min.apply(Math, number)

function Value(){
   console.log('low : ' + low)
   console.log('high : ' + high)
}

Value()