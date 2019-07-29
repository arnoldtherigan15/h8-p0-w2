// HARUS INPUT TANGGAL,BULAN DAN TAHUN
var tanggal = 29; 
var bulan = 7;
var tahun = 2019;
switch (bulan) {
    case 1: bulan = 'Januari';
    break;
    case 2: bulan = 'Februari';
    break;
    case 3: bulan = 'Maret';
    break;
    case 4: bulan = 'April';
    break;
    case 5: bulan = 'Mei';
    break;
    case 6: bulan = 'Juni';
    break;
    case 7: bulan = 'Juli';
    break;
    case 8: bulan = 'Agustus';
    break;
    case 9: bulan = 'September';
    break;
    case 10: bulan = 'Oktober';
    break;
    case 11: bulan = 'November';
    break;
    case 12: bulan = 'Desember';
    break;
    default: console.log('salah input bulan');
    bulan = '?';
}

if (tanggal >=1 && tanggal <= 31 && tahun >=1900 && tahun <= 2200) {
    console.log(tanggal , bulan , '' + tahun);
} else {
    console.log('salah input tanggal, bulan atau tahun');
}
