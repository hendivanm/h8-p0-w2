/*
1. Melakukan Looping Menggunakan While
======================================
*/
console.log ("LOOPING PERTAMA");

var jumlah = 0;

while (jumlah < 20) {
    jumlah += 2;
    console.log (jumlah + " - I love coding");
}

console.log ("LOOPING KEDUA");

var jumlah2 = 22;

while (jumlah2 > 2) {
    jumlah2 -= 2;
    console.log (jumlah2 + " - I will become fullstack developer");
}

/*
2. Melakukan Looping Menggunakan For
====================================
*/
console.log ("LOOPING PERTAMA");
for (var jumlah3 = 1; jumlah3 <= 20; jumlah3++) {
    console.log (jumlah3 + " - I love coding")
}

console.log ("LOOPING KEDUA");
for (var jumlah4 = 20; jumlah4 > 0; jumlah4--) {
    console.log (jumlah4 + " - I will become fullstack developer");
}

/*
3. Angka Ganjil dan Genap
=========================
*/
for (var jumlah5 = 1; jumlah5 < 101; jumlah5++) {
    if (jumlah5 % 2 !== 0) {
        console.log ("counter sekarang = " + jumlah5);
        console.log ("GANJIL");
    }
    else {
        console.log ("counter sekarang = " + jumlah5);
        console.log ("GENAP");
    }
}

for (var jumlah6 = 1; jumlah6 < 101; jumlah6 +=2)
    if (jumlah6 % 3 === 0){
        console.log (jumlah6 + " KELIPATAN 3");
    }

for (var jumlah7 = 1; jumlah7 < 101; jumlah7 +=5)
    if (jumlah7 % 6 === 0) {
        console.log (jumlah7 + " KELIPATAN 6");
    }

for (var jumlah8 = 1; jumlah8 < 101; jumlah8 +=9)
    if (jumlah8 % 10 === 0) {
        console.log (jumlah8 + " KELIPATAN 10");
    }