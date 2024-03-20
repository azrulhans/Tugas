let frm = document.getElementById("online");
let produkPilihan = ["TV", "AC", "KULKAS"];
let pilihProduk = `<option value=""> Pilihan Produk - - - - -</option>`;
for (let p in produkPilihan) {
  pilihProduk += `<option value="${produkPilihan[p]}">${produkPilihan[p]}</option>`;
}
frm.produk.innerHTML = pilihProduk;
function transaksi() {
  let nama = frm.nama.value;
  let produk = frm.produk.value;
  let jumlah = frm.jumlah.value;

  let harga;

  switch (produk) {
    case "TV":
      harga = 200000;
      break;
    case "AC":
      harga = 3000000;
      break;
    case "KULKAS":
      harga = 5000000;
      break;
    default:
      harga = 0;
  }

  let hargaKotor = harga * jumlah;
  //diskon
  let diskon;
  if (produk == "kulkas" && jumlah >= 3) diskon = 0.3 * hargaKotor;
  else if (produk == "AC" && jumlah >= 3) diskon = 0.2 * hargaKotor;
  else diskon = 0.1 * hargaKotor;
  swal(`
  Nama Pelanggan : ${nama}
  Produk Yang Dibeli : ${produk}
  Harga Produk : ${harga}
  Jumlah Produk Yang Dibeli : ${jumlah}
  Total harga yang dibayarkan : ${hargaKotor}
  Diskon yang didapatjan : ${diskon}
  `);
}
