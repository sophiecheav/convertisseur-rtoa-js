function convertRomanToArabic(romanNumber){
if(romanNumber == null)
return -1;
let resultat = 0,
valeur = 0, // Initialise!
prev = 0;

for(let i=0 ; i<romanNumber.length ; i++) {
let current = char_to_int(romanNumber.charAt(i));
if (current > prev) {
// Undo the addition that was done, turn it into subtraction
resultat -= 2 * valeur;
}
if (current !== prev) { // Different symbol?
valeur = 0; // reset the sum for the new symbol
}
valeur += current; // keep adding same symbols
resultat += current;
prev = current;
}
return resultat;
}

function char_to_int(character) {
switch(character){
case "I": return 1;
case "V": return 5;
case "X": return 10;
case "L": return 50;
case "C": return 100;
case "D": return 500;
case "M": return 1000;
default: return -1;
}
}

console.log(convertRomanToArabic("CL"));

document.querySelector('.rtoa-btn').addEventListener('click', function() {
  document.querySelector('.champ-chiffresromains2').value;
  let resultat = convertRomanToArabic();
  document.querySelector('.champ-chiffresarabes2').value = resultat;
});

convertRomanToArabic();
