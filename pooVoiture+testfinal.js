"use strict"
/**
 * Création de la class Voiture avec ses variables
 * @param { ObjectConstructor } Voiture
 * @param { String } immatriculation
 * @param { String } couleur
 * @param { Number } poids
 * @param { Number } puissance
 * @param { Number } capadureservoir
 * @param { Number } nivessence
 * @param { Number } nbrplace
 * @param { Boolean } assure
 * @param { String } tbldebord 
*/
class Voiture{
    constructor(immatriculation,couleur,poids,puissance,capadureservoir,nivessence,nbrplace,assure,tbldebord){
/**
 * Controle du format de la plaque d'immatricuation
 */
        let regex = new RegExp ('^[A-Z]{2}-[0-9]{3}-[A-Z]{2}$' );
        if (!regex.test(immatriculation)){
            throw new Error("Mauvaise immatriculation !!");
        }
/**
 * Controle du poids de la voiture
 */
        if (poids > 1000 || poids < 500 || isNaN(poids)){
            throw new Error("Le poids n'est pas bon !!");
        }
/**
 * Controle de la puissance de la voiture
 */
        if (puissance > 200 || puissance < 50 || isNaN(puissance)){
            throw new Error("La puissance n'est pas bonne !!");
        }
/**
 * Controle de la capacitée du réservoir
 */
        if (capadureservoir > 55 || capadureservoir < 30 || isNaN(capadureservoir)){
            throw new Error("La capacitée du réservoir n'est pas bonne !!");
        }
/**
 * Controle du niveau d'essence de départ
 */
        if (nivessence != 5 || isNaN(nivessence)){
            throw new Error("Le niveau d'essence de départ n'est pas bon !!");
        }
/**
 * Controle du nombre de places
 */
        if (nbrplace > 7 || nbrplace < 2 || isNaN(nbrplace)){
            throw new Error("Le nombre de places n'est pas bon !!");
        }
/**
 * Controle du message du tableau de bord
 */
        if (!isNaN(tbldebord)){
            throw new Error("Le message du tableau de bord est mal renseigné !!");
        }
/**
 * Initialisation des variables afin de les passer en privé
 */
        let initImmatriculation = immatriculation;
        let initCouleur = couleur;
        let initPoids = poids;
        let initPuissance = puissance;
        let initCapadureservoir = capadureservoir;
        let initNbrplace = nbrplace;
        let initNivessence = nivessence;
        let initAssure = assure;
        let initTbldebord = tbldebord;

/**
 * Attribution des variables seulement en getter ou setters/getters
 */
        this.getImmatriculation = () =>{
            return initImmatriculation;
        }
        this.setCouleur = (coul) =>{
            initCouleur = coul ;
        }
        this.getCouleur = () =>{
            return initCouleur ;
        }
        this.getPoids = () =>{
            return initPoids ;
        }
        this.getPuissance = () =>{
            return initPuissance ;
        }
        this.getCapadureservoir = () =>{
            return initCapadureservoir ;
        }
        this.getNbrplace = () =>{
            return  initNbrplace ;
        }
        this.setNivessence = (nv) =>{
            initNivessence = nv ;
        } 
        this.getNivessence = () =>{
            return initNivessence;
        }
        this.setAssure = (ass) =>{
            initAssure = ass;
        }
        this.getAssure = () =>{
            return initAssure;
        }
        this.setTbldebord = (tabl) =>{
            initTbldebord = tabl;
        }
        this.getTbldebord = () =>{
            return initTbldebord;
        }
    } 
/**
 * Méthode pour repeindre le véhicule
 * @param { String } repCouleur 
 */
    repeindre(repCouleur){
        let msg ;
        if (repCouleur === this.getCouleur()){
            msg = "Merci pour le rafraîchissement de la couleur !"; 
        } else {
            msg = "Merci d'avoir choisi la couleur "+ repCouleur;
        }
        this.setCouleur(repCouleur);
        return msg ; 
    }
/**
 * Méthode pour remplir le réservoir d'essence
 * @param { Number } repEssence 
 */
    mettreEssence(repEssence){
        let msg ;
        let totalEssence = repEssence + this.getNivessence(); 
        if (totalEssence < this.getCapadureservoir()){
            this.setNivessence(totalEssence);
            msg = "Vous avez ajouté " + repEssence + "L.";
        } else if (totalEssence > this.getCapadureservoir()){
            msg = "Trop d'essence !!!";
        } else {
            this.setNivessence(totalEssence);
            msg = "Vous avez fait le plein.";
        }
        return msg ;
    }
/**
 * Méthode pour calculer la consommation
 * @param { Number } distance 
 * @param { Number } vitesse 
 */
    seDeplacer(distance,vitesse){
        let conso ;
        let msg ;
        if (vitesse > 130){
            conso = (distance * 12)/100;
        } else if ((vitesse >= 90) && (vitesse < 130)){
            conso = (distance * 8)/100;
        } else if ((vitesse >= 50) && (vitesse < 90)){
            conso = (distance * 5)/100;
        } else {
            conso = (distance * 10)/100;
        }
/**
 * Message si la consommation est supérieur ou non au niveau d'essence
 */
        if (conso > this.getNivessence()){
            msg = `Vous n'avez pas assez de carburant pour effectuer cette distance à cette vitesse.`
        } else if (conso <= this.getNivessence()){
            msg = `Vous allez consommer ${conso} L, il vous restera ${(this.getNivessence() - conso)} L\nd'essence en atteignant votre destination.`;
            this.setNivessence(this.getNivessence() - conso);
        }
        return msg ;
    }
/**
 * Méthode d'affichage du tbldebord, plaque d'immatriculation et la puissance
 */
    toString(){
        return `${vehicule.getTbldebord()},\nvotre numero d'immatriculation est ${vehicule.getImmatriculation()},\nla puissance est ${vehicule.getPuissance()},\nle véhicule est de couleur ${vehicule.getCouleur()}.`; 
    }
}

// Traitement
/**
 * Infos du vehicule selon la classe voiture
 */
let vehicule = new Voiture ("PX-698-KJ","Bleu",850,110,45,5,5,false,"Bonjour");

/**
 * Demande à l'utilisateur si véhicule est assuré et controle de la réponse O/N
 */
let blnErreur = true ;
let assurance ;
while (blnErreur) {
    assurance = prompt("Le véhicule est il assuré ? O/N ");
    if (assurance === "O" || assurance === "N"){
        blnErreur = false ;
    }
    vehicule.setAssure(assurance === "O"? true:false);
}

/**
 * Demande à l'utilisateur la couleur du véhicule et controle d'une couleur disponible
 */
let blnErreur1 = true ;
let newCouleur ;
while (blnErreur1) {
    newCouleur = prompt("Choisir la couleur du véhicule : Rouge, Jaune ou Bleu");
    if (newCouleur === "Rouge" || newCouleur === "Bleu" || newCouleur === "Jaune"){
        blnErreur1 = false ;
    }
}

/**
 * Demande à l'utilisateur l'essence a rajouter au réservoir et controle de la valeur entrée
 */
let blnErreur2 = true ;
let newEssence ;
while (blnErreur2) {
    newEssence = parseInt(prompt("Ajouter de l'essence : "));
    if (!isNaN(newEssence)){
        blnErreur2 = false ;
    }
}
/**
 * Demande à l'utilisateur de renseigner la vitesse et la distance a parcourir, controle des valeurs entrées
 */
let blnErreur3 = true ;
let blnErreur4 = true ;
let vitesse ;
let distance ;
while (blnErreur3) {
    vitesse = parseInt(prompt("A quelle vitesse roulez vous ?"));
    if (!isNaN(vitesse) && vitesse < 200) {
        blnErreur3 = false ;
    }
}
while (blnErreur4) {
    distance = parseInt(prompt("Sur quelle distance ?"));
    if (!isNaN(distance)){
        blnErreur4 = false ;
    }
}

// Affichage
/**
 * Affichage des méthodes
 */
console.log(vehicule.repeindre(newCouleur));
console.log(vehicule.mettreEssence(newEssence));
console.log(vehicule.seDeplacer(distance,vitesse));

console.log(vehicule.toString());

