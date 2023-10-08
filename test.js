// Program akan menghitung jumlah huruf vokal dalam sebuah string
// dan terus meminta input hingga pengguna memasukkan string dengan panjang lebih dari 5 karakter.

do {
    // Meminta pengguna untuk memasukkan sebuah string
    var inputString = prompt("Masukkan sebuah string:");
  
    // Menghitung jumlah huruf vokal dalam string
    var jumlahvocal = 0;
    for (var i = 0; i < inputString.length; i++) {
      var char = inputString[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        jumlahvocal++;
      }
    }
  
    // Memeriksa panjang string
    if (inputString.length <= 5) {
      console.log("Panjang string harus lebih dari 5 karakter. Coba lagi.");
    } else {
      console.log(`Jumlah huruf vokal dalam string "${inputString}" adalah ${jumlahvocal}.`);
      break;
    }
  } while (true);
  