var nama = '';
var peran = '';
if (nama !== '' && peran === 'ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran ,'' + nama , '\,kamu dapat menyerang dengan senjatamu!');
} else if (peran === 'tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran ,'' + nama , '\,kamu dapat menyerang dengan senjatamu!');
} else if (peran === 'penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran ,'' + nama , '\,kamu dapat menyerang dengan senjatamu!');
} else if (nama !== '' && peran === '') {
    console.log('Halo ' + nama , '\,Pilih peranmu untuk memulai game!');
} else if (nama === '') {
    console.log('Nama harus diisi!');
} else {
    console.log('Peran yang tersedia adalah ksatria, tabib dan penyihir');
    console.log('Masukkan kembali peran kamu!');
}