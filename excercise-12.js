// Logic Challenge - Konversi Menit

function konversiMenit(menit) { 
    var jam = Math.floor(num / 60);    
    var menit = num % 60;
    if ( menit < 10) {
        menit = '0' + num % 60;
    } return jam + ":" + menit;  
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
