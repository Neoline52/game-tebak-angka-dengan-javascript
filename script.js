// GAME TEBAK ANGKA

alert(
  `Selamat datang di game tebak gambar, \n Kamu punya 3 kesempatan`
);
alert("Tebaklah angka dari 1 sampai 10");

// Mendapatkan angka
let chance = 3;
let comp = Math.floor(Math.random() * 10) + 1;
console.log(comp);

while (chance > 0) {
  let user = parseInt(prompt("masukan jawaban anda"));
  chance--;

  if (user == comp) {
    alert(`Jawaban anda benar, \n angka yang dicari adalah ${comp}`);
    break;
  } else if (user > comp) {
    alert(`Jawaban anda terlalu besar  \n kesempatan anda tersisa ${chance}`);
    chance--;
    if (chance === 0) {
      alert(`Kesempatan anda habis \n angka yang dicari adalah ${comp}`);
      break;
    }
  } else if (user < comp) {
    alert(`Jawaban anda terlalu kecil \n kesempatan anda tersisa ${chance}`);
    if (chance === 0) {
      alert(`Kesempatan anda habis \n angka yang dicari adalah ${comp}`);
      break;
    }
  } else if (chance === 0) {
    alert(`Kesempatan anda habis \n angka yang dicari adalah ${comp}`);
    break;
  } else {
    alert("Anda memasukan hal yang salah");
  }
}
