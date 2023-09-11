// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Meminta pengguna untuk memasukkan suhu dalam Celsius
rl.question('Masukkan suhu dalam Celcius: ', (inputCelcius) => {
  // Mengkonversi input pengguna menjadi angka
  const celcius = parseFloat(inputCelcius);

  // Memeriksa apakah input valid
  if (!isNaN(celcius)) {
    // Menghitung suhu dalam Fahrenheit menggunakan rumus yang berlaku
    const fahrenheit = (celcius * 9/5) + 32;
    
    // Menampilkan hasil konversi
    console.log(`Suhu dalam Fahrenheit: ${fahrenheit}`);
  } else {
    // Menampilkan pesan jika input tidak valid
    console.log('Masukkan harus berupa angka.');
  }

  // Menutup interface readline
  rl.close();
});
