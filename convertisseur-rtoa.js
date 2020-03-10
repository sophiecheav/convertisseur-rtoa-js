function convertRomanToArabic(romanNumber){

  //guard
  if(romanNumber == null || romanNumber == "") {return -1;}

  //les valeurs par défaut
  let resultat = 0;
  let prev = 0;

  // boucle for : une condition de départ, une condition d'étape, jusqu'à l'étape finale; i++ signifie mavariable'i'+1 ; sucre syntaxique = une facilité de lgge
  for(let position = 0 ; position < romanNumber.length ; position++) {
    let valeurLettreRomaine = lettreDevientNombre(romanNumber.charAt(position)); //charAt =  character at (position i) ;

    if (valeurLettreRomaine > prev) {
      resultat -= 2 * prev; // resultat = resultat - 2 * valeur
    }
    resultat += valeurLettreRomaine;
    prev = valeurLettreRomaine;
  }

  return resultat;
}

function lettreDevientNombre(character) { // convertit une chaîne de caractères en nb entiers
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

console.log(convertRomanToArabic("V"));

document.querySelector('.rtoa-btn').addEventListener('click', function() {
  let valeurChiffresRomains = document.querySelector('.champ-chiffresromains2').value;
  let resultat = convertRomanToArabic(valeurChiffresRomains);
  document.querySelector('.champ-chiffresarabes2').value = resultat;

});
