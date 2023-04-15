// Language: javascript
const golonganPenerimaZakat = [
  "Miskin",
  "Fakir",
  "Muallaf",
  "Riqab",
  "Musafir",
  "Fisabilillah",
  "Gharimin",
  "Amil",
];

const daftarWarga = [
  {
    nama: "Khoirul",
    golongan: "Miskin",
  },
  {
    nama: "Rahmat",
    golongan: "Fakir",
  },
  {
    nama: "Rizal",
    golongan: "Pedagang",
  },
  {
    nama: "Rizki",
    golongan: "Riqab",
  },
  {
    nama: "Gani",
    golongan: "Musafir",
  },
  {
    nama: "Budi",
    golongan: "Kaya",
  },
];

//* Check is someone can get zakat or not
const checkZakat = (nama) => {
  const warga = daftarWarga.filter((warga) => warga.nama === nama);
  const golongan = warga[0].golongan;
  const isZakat = golonganPenerimaZakat.includes(golongan);
  if (isZakat) {
    return `${nama} bisa menerima zakat`;
  } else {
    return `${nama} tidak bisa menerima zakat, karena golongan ${golongan}`;
  }
};
console.log(checkZakat("Rizal"));
