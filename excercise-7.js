// 1. Menyusun Barisan Bintang

console.log('Tugas 1 \n');
for (var rows1 = 5; rows1 >= 1; rows1--) {
    console.log('*');
}

//  2. Menyusun Barisan Bintang Dengan Nested Looping

console.log('\nTugas 2 \n');
var rows2 = 5;
for (var i = 0; i<rows2; i++) {
    var asteriks = '*';
    for (var j = 1; j<rows2; j++) {
        asteriks = asteriks + '*';
    }
    console.log(asteriks);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

console.log('\nTugas 3 \n');
var rows3 = 5;
for (var i = 0; i<rows3; i++) {
    var asteriks = '*';
    for (var j = 0; j<i; j++) {
        asteriks = asteriks + '*';
    }
    console.log(asteriks);
}