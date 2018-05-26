/*
Tugas 1
=======
*/
function shoutOut () {
    return "Halo Function!";
}

console.log (shoutOut())

/*
Tugas 2
=======
*/
function calculateMultiply (num1, num2) {
    return num1 * num2;
}

var num1 = 90;
var num2 = 80;

var hasilPerkalian = calculateMultiply (num1, num2);
console.log (hasilPerkalian);

/*
Tugas 3
=======
*/
function processSentence (name, age, address, hobby) {
    var fullSentence = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby +"!";
    return fullSentence;
}

var name = "Ivan";
var age = 23;
var address = "Jakarta Selatan";
var hobby = "menggambar kartun";

var fullSentence = processSentence (name, age, address, hobby);
console.log (fullSentence);

/*
function processSentence (name, age, address, hobby) {
    return fullSentence = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby +"!";
}

var name = "Ivan";
var age = 23;
var address = "Jakarta Selatan";
var hobby = "menggambar kartun";

var fullSentence = processSentence (name, age, address, hobby);
console.log (fullSentence);
*/