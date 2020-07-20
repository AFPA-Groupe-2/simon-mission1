/* Programme en pseudo code
Variable utilisé : 
tTableau = [] ; tableau pour la suite de nombre entier à rentrer, 
intSomme = 0 ;pour la somme des nombres, 
intMoyenne = 0 ; pour la moyenne des nombres, 
intMini = 0 ; pour le plus petit
intMaxi = 0 ; pour le plus grand.
intValeur = 0 ; pour le nombre de valeur rentré


Pseudo code :
FAIRE Demande a l'utilisateur de saisir les nombres entiers.
TANT QUE valeur est different de 0 on rempli le tableau.
Ajouter les valeurs des nombres a la somme
FOR i = 0 ; i < tTableau.lenght ; i++
    IF la valeur rentré est plus grande que la valeur rentrer avant
    intMaxi = tTableau[i]
    ELSE la valeur rentré est plus petite
    intMaxi = tTableau[i]
La moyenne est égal a la somme divisé par le nombre de valeur
*/

// Valeurs :
"use strict"
let tTableau = []; //tableau pour la suite de nombre entier à rentrer
let intSomme = 0 ; //pour la somme des nombres
let intMoyenne = 0 ; //pour la moyenne des nombres
let intMini = 0 ; //pour le plus petit
let intMaxi = 0 ; //pour le plus grand
let intValeur = 0 ; //pour les valeurs rentrée
let intNbr = 0 ; //pour le nombre de valeur
// Traitement :
do {
    intValeur = parseInt(prompt("Entrer des nombres entier : ")); // Entrée des valeurs dans tTableau
    if (intValeur !=0 ) tTableau.push(intValeur);
    
} while (intValeur != 0);

for (let i = 0 ; i < tTableau.length ; i ++){ // Somme et Controle du mini et maxi
    intSomme += tTableau[i] ; // Somme des valeurs
    if (tTableau[i] > tTableau[i-1]) {
        intMaxi = tTableau[i]; // Maxi
    } else if (tTableau[i] < tTableau[i-1]) {
        intMini = tTableau[i]; // Mini
    }
}

intNbr = tTableau.length ;
intMoyenne = intSomme/intNbr ;
console.log( intNbr +"\n"+ intMini +"\n"+ intMaxi +"\n"+ intSomme +"\n"+ intMoyenne);