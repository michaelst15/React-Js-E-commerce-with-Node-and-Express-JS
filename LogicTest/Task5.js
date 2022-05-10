
let value = 101;
function ubah(angka){
let bilangan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']

if(angka < 11){
    return bilangan[angka]
   }
else if(angka < 100){
    return ubah(Math.floor(parseInt(angka)/10))+ ' puluh ' +ubah(parseInt(angka)%10)
   }
else if(angka > 100){
    return 'silahkan masukkan bilangan 1-100'
   }
}

console.log(ubah(value))