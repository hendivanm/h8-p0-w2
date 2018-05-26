/*
1. Menyusun Barisan Bintang
===========================
*/
for (var rows1 = 1; rows1 <= 5; rows1++) {
    console.log ("*");
}

/*
2. Menyusun Barisan Bintang Dengan Nested Looping
=================================================
*/
var rows2 = 6;
var star = "";
for (var rows3 = 1; rows3 < rows2; rows3++) {
    for (var rows4 = 1; rows4 < rows2; rows4++) {
    star += "*";
}
    console.log (star);
    star = "";
}

/*
var i = 5;
for (var baris = 1; baris <= i; baris++) {
    var bintang = "";
    for (var kolom = 1; kolom <= i; kolom++) {
        bintang += "*";
    }
    console.log (bintang);
}

3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
========================================================
*/
var star2 = "*";
for (var rows5 = 1; rows5 <= 5; rows5++) {
    console.log (star2);
    star2 += "*";
}