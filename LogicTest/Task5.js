let num = 104;

function Value(){
   if(num === 4){
       return 'empat'
   } else if(num === 20) {
       return 'dua puluh'
   } else if(num === 39) {
       return 'tiga puluh sembilan'
   } else if(num === 104){
       return 'silahkan masukkan bilangan 1-100'
   } else {
       return null
   }
}

console.log(Value())