// 1. Let's Form a Sentence

var word = 'Javascript ';
var second = 'is ';
var third = 'awesome ';
var fourth = 'and ';
var fifth = 'I ';
var sixth = 'love ';
var seventh = 'it! ';
console.log('Tugas 1');
// menggunakan +
console.log(word+second+third+fourth+fifth+sixth+seventh);
// menggunakan concat
console.log(word.concat(second, third, fourth, fifth, sixth, seventh));

// 2. Index Accesising -1 by 1
var word2 = 'wow Javascript is so cool';
var exampleFirstWord = word2[0] + word2[1] + word2[2];
var secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9]
                 + word2[10] + word2[11] + word2[12] + word2[13] + word2[14];
var thirdWord = word2[15] + word2[16];
var fourthWord = word2[18] + word2[19];
var fifthWord = word2[21] + word2[22] + word2[23] + word2[24];

console.log('\nTugas 2');

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// 3. Breaking Sentence (Again) using Substring

var word3 = 'wow Javascript is so cool';
var exampleFirstWord3 = word3.substring(0,3);
var secondWord3 = word3.substring(4,14);
var thirdWord3 = word3.substring(15,17);
var fourthWord3 = word3.substring(18,20);
var fifthWord3 = word3.substring(21,25);;
console.log('\nTugas 3');

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

// 4.Breaking Sentence (yet Again) and Count Each Length

var word4 = 'wow Javascript is so cool';
var exampleFirstWord4 = word3.substring(0,3);
var secondWord4 = word4.substring(4,14);
var thirdWord4 = word4.substring(15,17);
var fourthWord4 = word4.substring(18,20);
var fifthWord4 = word4.substring(21,25);;
console.log('\nTugas 4');

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + exampleFirstWord4.length);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWord4.length);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWord4.length);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWord4.length);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWord4.length);

