/*
Logic Challenge - Balik Kata
============================
*/
function balikKata (kata) {
    var word = kata.split("").reverse().join("");
    return word;
}
console.log (balikKata("Hello World and Coders"));
console.log (balikKata("John Doe"));
console.log (balikKata("I am a bookworm"));
console.log (balikKata("Coding is my hobby"));
console.log (balikKata("Super"));