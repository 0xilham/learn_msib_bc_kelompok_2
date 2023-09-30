// Import modul readline
const readline = require('readline');

// Buat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghasilkan pertanyaan penjumlahan dan memeriksa jawaban
function tanyaPenjumlahan() {
  rl.question('Masukkan angka pertama: ', (angka1) => {
    rl.question('Masukkan angka kedua: ', (angka2) => {
      angka1 = parseInt(angka1);
      angka2 = parseInt(angka2);

      if (isNaN(angka1) || isNaN(angka2)) {
        console.log('Input tidak valid. Mohon masukkan angka.');
        tanyaPenjumlahan(); // Coba lagi jika input tidak valid
      } else {
        const jawabanBenar = angka1 + angka2;

        rl.question(`Berapa hasil dari ${angka1} + ${angka2}? `, (jawaban) => {
          if (parseInt(jawaban) === jawabanBenar) {
            console.log('Selamat, jawaban Anda benar!');
          } else {
            console.log(`Maaf, jawaban Anda salah. Jawaban yang benar adalah ${jawabanBenar}`);
          }

          // Tutup interface readline setelah satu pertanyaan selesai
          rl.close();
        });
      }
    });
  });
}

// Mulai permainan dengan pertanyaan pertama
tanyaPenjumlahan();
