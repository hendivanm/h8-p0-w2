var hari = 19;
var bulan = 3;
var tahun = 2018;
/*
switch (bulan) {
    case 1 : console.log (hari + " Januari " + tahun); break;
    case 2 : console.log (hari + " Februari " + tahun); break;
    case 3 : console.log (hari + " Maret " + tahun); break;
    case 4 : console.log (hari + " April " + tahun); break;
    case 5 : console.log (hari + " Mei " + tahun); break;
    case 6 : console.log (hari + " Juni " + tahun); break;
    case 7 : console.log (hari + " Juli " + tahun); break;
    case 8 : console.log (hari + " Agustus " + tahun); break;
    case 9 : console.log (hari + " September " + tahun); break;
    case 10 : console.log (hari + " Oktober " + tahun); break;
    case 11 : console.log (hari + " November " + tahun); break;
    case 12 : console.log (hari + " Desember " + tahun); break;
}
*/

var descBulan;
switch (bulan) {

  case 1:
    descBulan = "Januari";
    break;

  case 2:
    descBulan = "Februari";
    break;

  case 3:
    descBulan = "Maret";
    break;

  case 4:
    descBulan = "April";
    break;

  case 5:
    descBulan = "Mei";
    break;

  case 6:
    descBulan = "Juni";
    break;

  case 7:
    descBulan = "Juli";
    break;

  case 8:
    descBulan = "Agustus";
    break;

  case 9:
    descBulan = "September";
    break;

  case 10:
    descBulan = "Oktober";
    break;

  case 11:
    descBulan = "November";
    break;

  case 12:
    descBulan = "Desember";
    break;

  default:
    descBulan = "Bulan Invalid";
    break;
}

console.log (hari + " " + descBulan + " " + tahun);