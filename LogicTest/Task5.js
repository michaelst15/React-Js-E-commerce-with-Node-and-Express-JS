
let value = 14;
function ubah(angka){
let bilangan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']

if(angka < 12){
    return bilangan[angka]
   }
else if(angka < 20){
   return ubah(angka-10) + 'belas'
}
else if(angka < 100){
    return ubah(Math.floor(parseInt(angka)/10))+ ' puluh ' +ubah(parseInt(angka)%10)
   }
else if(angka > 100){
    return 'silahkan masukkan bilangan 1-100'
   }
}

console.log(ubah(value))