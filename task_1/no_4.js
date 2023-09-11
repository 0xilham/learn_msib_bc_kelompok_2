// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk membandingkan dua angka
function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2) {
    console.log(`${angka2} lebih besar dari ${angka1}`);
  } else if (angka1 > angka2) {
    console.log(`${angka1} lebih besar dari ${angka2}`);
  } else {
    console.log('Angka-angka tersebut sama besar.');
  }
}

// Meminta pengguna untuk memasukkan angka pertama
rl.question('Masukkan angka pertama: ', (angkaPertama) => {
  // Meminta pengguna untuk memasukkan angka kedua
  rl.question('Masukkan angka kedua: ', (angkaKedua) => {
    // Mengkonversi input pengguna menjadi angka
    const num1 = parseFloat(angkaPertama);
    const num2 = parseFloat(angkaKedua);

    // Memeriksa apakah input valid
    if (!isNaN(num1) && !isNaN(num2)) {
      // Memanggil fungsi untuk membandingkan angka
      bandingkanAngka(num1, num2);
    } else {
      // Menampilkan pesan jika input tidak valid
      console.log('Masukkan harus berupa angka.');
    }

    // Menutup interface readline
    rl.close();
  });
});
