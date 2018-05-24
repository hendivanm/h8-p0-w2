/*Logic Challenge - Konversi Menit
================================
*/
function konversiMenit(menit) {
    var jam = Math.floor (menit / 60);
    var menit = (menit % 60).toString().length === 1 ? "0" + menit % 60 : menit % 60;
    return jam + ":" + menit;
}

console.log (konversiMenit(63));
console.log (konversiMenit(124));
console.log (konversiMenit(53));
console.log (konversiMenit(88));
console.log (konversiMenit(120));