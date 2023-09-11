// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Meminta pengguna untuk memasukkan angka pertama
rl.question('Masukkan angka pertama: ', (angka1) => {
  // Meminta pengguna untuk memasukkan angka kedua
  rl.question('Masukkan angka kedua: ', (angka2) => {

    // Mengkonversi input pengguna menjadi angka
    const num1 = parseFloat(angka1);
    const num2 = parseFloat(angka2);

    // Memeriksa apakah input valid
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Masukkan harus berupa angka.');
    } else {
      // Melakukan perkalian
      const hasilPerkalian = num1 * num2;
      console.log(`Hasil perkalian: ${hasilPerkalian}`);
    }

    // Menutup interface readline
    rl.close();
  });
});
