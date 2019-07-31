// var asteriks = '';
// var rows = 5;
// for (var i = 0;  i < rows; i++) {
//     for (var j =0; j <= i; j++) {
//         asteriks += '*';
//     }
//     asteriks += '\n';
// }
// console.log(asteriks);

// challenge 2
// *****
// ****
// ***
// **
// *

// var asteriks = '';
// for (var i = 5; i >= 0; i--) {
//     for (var j=0; j < i; j++) {
//     asteriks += '*';
//     }
//     asteriks += '\n';
// }
// console.log(asteriks);

for (var rows = 4; rows >= 0; rows--) {
    var asteriks = '*';
    for (var j = 0; j < rows; j++) {
        asteriks += '*';
    }
    console.log(asteriks);
}