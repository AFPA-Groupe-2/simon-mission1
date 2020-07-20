"use strict"
let tTableau = []; //tableau pour la suite de nombre entier à rentrer
let intSomme = 0 ; //pour la somme des nombres
let intMoyenne = 0 ; //pour la moyenne des nombres
let intMaxi = 0 ; //pour le plus petit
let intMini = 0 ; //pour le plus grand
let intValeur = 0 ; //pour les valeurs rentrée
let intNbr = 0 ; //pour le nombre de valeur
// Traitement :
do {
    intValeur = parseInt(prompt("Entrer des nombres entier : ")); // Entrée des valeurs 
    if (intValeur !=0 ){
        tTableau.push(intValeur); // Valeur ajouté a tTableau
        if (tTableau.length == 1){
            intMini = intValeur ;
        }
        
        if (intValeur > intMaxi){
            intMaxi = intValeur; // Attribution valeur maxi
        } else if (intValeur < intMini){
            intMini = intValeur; // Attribution valeur mini
        }
    }
} while (intValeur != 0);

for (let i = 0 ; i < tTableau.length ; i ++){ // Somme
    intSomme += tTableau[i] ; // Somme des valeurs
}

intNbr = tTableau.length ; // Nombre de valeurs
intMoyenne = intSomme/intNbr ; // Moyenne des valeurs

// Affichage
console.log(`${intNbr} nombre de saisis
Compris entre ${intMini} et ${intMaxi}
Pour une somme de ${intSomme}
Et une moyenne de ${intMoyenne}`);