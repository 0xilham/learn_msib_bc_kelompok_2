// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Meminta pengguna untuk memasukkan angka range
rl.question('Masukkan angka range: ', (range) => {
  // Mengkonversi input pengguna menjadi angka bulat (integer)
  const n = parseInt(range);

  // Memeriksa apakah input valid (harus berupa angka positif)
  if (!isNaN(n) && n > 0) {
    // Inisialisasi variabel untuk menyimpan jumlah bilangan ganjil
    let jumlahGanjil = 0;

    // Melakukan perulangan dari 1 hingga n
    for (let i = 1; i <= n; i++) {
      // Memeriksa apakah bilangan saat ini adalah ganjil
      if (i % 2 !== 0) {
        // Menambahkan bilangan ganjil ke jumlahGanjil
        jumlahGanjil += i;
      }
    }

    // Menampilkan hasil jumlah bilangan ganjil
    console.log(`Jumlah bilangan ganjil dari 1 hingga ${n}: ${jumlahGanjil}`);
  } else {
    // Menampilkan pesan jika input tidak valid
    console.log('Masukkan harus berupa angka positif.');
  }

  // Menutup interface readline
  rl.close();
});
