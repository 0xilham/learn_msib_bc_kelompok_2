// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inisialisasi total harga belanjaan
let totalHarga = 0;

// Meminta pengguna untuk memasukkan harga item pertama
rl.question('Masukkan harga item pertama: ', (hargaItem1) => {
  // Menambahkan harga item pertama ke total harga
  totalHarga += parseFloat(hargaItem1);

  // Meminta pengguna untuk memasukkan harga item kedua
  rl.question('Masukkan harga item kedua: ', (hargaItem2) => {
    // Menambahkan harga item kedua ke total harga
    totalHarga += parseFloat(hargaItem2);

    // Meminta pengguna untuk memasukkan harga item ketiga
    rl.question('Masukkan harga item ketiga: ', (hargaItem3) => {
      // Menambahkan harga item ketiga ke total harga
      totalHarga += parseFloat(hargaItem3);

      // Memeriksa apakah input valid
      if (!isNaN(totalHarga)) {
        // Menampilkan total harga belanjaan
        console.log(`Total harga belanjaan: ${totalHarga}`);
      } else {
        // Menampilkan pesan jika input tidak valid
        console.log('Harga item harus berupa angka.');
      }

      // Menutup interface readline
      rl.close();
    });
  });
});
