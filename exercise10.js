/*
Logic Challenge - Bandingkan Angka
==================================
*/
function bandingkanAngka (angka1, angka2) {
    if (angka2 > angka1) {
        return true;
    }
    else if (angka2 < angka1) {
        return false;
    }
    else { return -1;
    }
}
console.log (bandingkanAngka(8, 9));
console.log (bandingkanAngka(9, 8));
console.log (bandingkanAngka(9, 9));
console.log (bandingkanAngka(8, 8));
console.log (bandingkanAngka(8, 7));