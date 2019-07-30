// 1. Melakukan Looping Menggunakan While
console.log('Tugas 1 \n');
var jumlah1 = 2;
var jumlah2 = 20;
console.log('LOOPING PERTAMA');
while(jumlah1 <= 20) {
    console.log(jumlah1 + ' - I Love coding');
    jumlah1 += 2;
}
console.log('LOOPING KEDUA');
while(jumlah2 >= 2) {
    console.log(jumlah2 + ' - I will become fullstack developer');
    jumlah2 -= 2;
}

// 2. Melakukan Looping Menggunakan For
console.log('\nTugas 2 \n');
console.log('LOOPING PERTAMA');
for (var i = 0; i <= 20; i++) {
    console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (var n = 20; n >= 1; n--) {
    console.log(n + ' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap

console.log('\nTugas 3 \n');
console.log('- ganjil genap -\n');
for (var int = 1; int <= 100; int++) {
    if (int % 2 === 0) {
        console.log('counter sekarang = ' + int + ' adalah GENAP');
    } else {
        console.log('counter sekarang = ' + int + ' adalah GANJIL');
    }
}
console.log('\n- untuk pertambahan counter 2-\n');
for (var int1 = 1; int1 <= 100; int1 +=2) {
    if (int1 % 3 === 0) {
        console.log('counter sekarang = ' + int1 + ' KELIPATAN 3');
    } else {
    }
}
console.log('\n- untuk pertambahan counter 5-\n');
for (var int2 = 1; int2 <= 100; int2 +=5) {
    if (int2 % 6 === 0) {
        console.log('counter sekarang = ' + int2 + ' KELIPATAN 6');
    } else {
    }
}
console.log('\n- untuk pertambahan counter 9-\n');
for (var int3 = 1; int3 <= 100; int3 +=9) {
    if (int3 % 10 === 0) {
        console.log('counter sekarang = ' + int3 + ' KELIPATAN 10');
    } else {
    }
}