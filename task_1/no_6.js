// Import modul readline
const readline = require('readline');

// Buat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi rekursif untuk menghitung faktorial
function faktorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * faktorial(n - 1);
  }
}

// Minta pengguna untuk memasukkan bilangan bulat positif
rl.question('Masukkan sebuah bilangan bulat positif: ', (input) => {
  const bilangan = parseInt(input);

  // Periksa apakah input valid
  if (isNaN(bilangan) || bilangan < 0) {
    console.log('Input tidak valid. Masukkan bilangan bulat positif.');
  } else {
    // Hitung faktorial dan tampilkan hasilnya
    const hasil = faktorial(bilangan);
    console.log(`${bilangan}! = ${hasil}`);
  }

  // Tutup interface readline
  rl.close();
});
