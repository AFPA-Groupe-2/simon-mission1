"use strict"
/**
 * Initialisation des valeurs :
 * @param { Array } tTableau
 * @param { Number } intSomme
 * @param { Number } intMoyenne
 * @param { Number } intValeur
 * @param { Number } intNbr
 */
let tTableau = []; 
let intSomme = 0 ; 
let intMoyenne = 0 ; 
let intValeur = 0 ; 
let intNbr = 0 ; 

// Traitement :
/**
 * Demande de rentrée des nombres qui s'ajoutent a tTableau, tant que le nombre n'est pas 0, somme de ces nombres.
 * Le console.log() affiche les nombres rentrés, sans le 0
 */
do {
    intValeur = parseInt(prompt("Entrer des nombres entier : "));
    if (intValeur !==0 ){
        tTableau.push(intValeur); 
        intSomme += intValeur ;
         
    }
    if (intValeur !==0) {
        console.log("Vous venez d'entrer le nombre : " + intValeur);
    }
} while (intValeur !== 0);
/**
 * Récupération du nombre de nombre renseigné, ajout a intNbr
 */
intNbr = tTableau.length ;
/**
 * Moyenne de la somme en fonction du nombre de nombre, arrondi grave a Math.round()
 */
intMoyenne = Math.round(intSomme/intNbr) ;

// Affichage
/**
 * Affichage des valeurs, Math.min(...tTableau) et Math.max(...tTableau) donne les valeurs des nombres maxi et mini du tableau 
 */
console.log(`${intNbr} nombre de saisis
Compris entre ${Math.min(...tTableau)} et ${Math.max(...tTableau)} 
Pour une somme de ${intSomme}
Et une moyenne de ${intMoyenne}`);
alert(`${intNbr} nombre de saisis
Compris entre ${Math.min(...tTableau)} et ${Math.max(...tTableau)} 
Pour une somme de ${intSomme}
Et une moyenne de ${intMoyenne}`)