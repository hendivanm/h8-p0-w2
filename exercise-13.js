/*
Logic Challenge - X dan O
=========================
*/

function xo(str) {
    var xJumlah = 0;
    var oJumlah = 0;
    for (let jumlah = 0; jumlah < str.length; jumlah++) {
        if (str[jumlah] === "x") {
            xJumlah++;
        }
        else {
            oJumlah++;
        }
    }

    if (xJumlah === oJumlah) {
        return true;
    }
    else {
        return false;
    }
}

console.log(xo("xoxoxo"));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));