"use strict"
// Classe Voiture
class Voiture{
    constructor(immatriculation,couleur,poids,puissance,capadureservoir,nivessence,nbrplace,assure,tbldebord){
        let initImmatriculation = immatriculation;
        let initCouleur = couleur;
        let initPoids = poids;
        let initPuissance = puissance;
        let initCapadureservoir = capadureservoir;
        let initNbrplace = nbrplace;
        let initNivessence = nivessence;
        let initAssure = assure;
        let initTbldebord = tbldebord;

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

    repeindre(repCouleur){
        let msg ;
        if (repCouleur === this.getCouleur()){
            msg = "Merci pour ce rafraîchissement en "+ repCouleur; 
        } else {
            msg = "Merci d'avoir choisi la couleur "+ repCouleur;
        }
        this.setCouleur(repCouleur);
        return msg ; 
    }

    mettreEssence(repEssence){
        let msg ;
        let totalEssence = repEssence + this.getNivessence(); 
        if (totalEssence < this.getCapadureservoir()){
            this.setNivessence(totalEssence);
            msg = "Vous avez ajouté " + repEssence + "L.";
        } else if (totalEssence > this.getCapadureservoir()){
            msg = "Trop d'essence";
        } else {
            this.setNivessence(totalEssence);
            msg = "Vous avez fait le plein.";
        }
        return msg ;
    }

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
        if (conso > this.getNivessence()){
            msg = `Vous n'avez pas assez de carburant pour effectuer cette distance à cette vitesse.`
        } else if (conso <= this.getNivessence()){
            msg = `Vous allez consommer ${conso} L, il vous restera ${(this.getNivessence() - conso)} L d'essence.`;
            this.setNivessence(this.getNivessence() - conso);
        }
        return msg ;
    }
        
    toString(){
        return `${vehicule.getTbldebord()}, 
        votre numero d'immatriculation est ${vehicule.getImmatriculation()},
        le véhicule est de couleur ${vehicule.getCouleur()}, 
        le poids est ${vehicule.getPoids()}, la puissance est ${vehicule.getPuissance()}, le réservoir
        fait ${vehicule.getCapadureservoir()}, vous avez ${vehicule.getNivessence()} litre d'essence,
        il y a ${vehicule.getNbrplace()} places, ${vehicule.getAssure()? "Assuré":"Non assuré"}.`;
    }
}

// Traitement
// Infos du vehicule
let vehicule = new Voiture ("PX-698-KJ","Bleu",850,110,45,5,5,false,"Bonjour");

// Controle assurance
let assurance = prompt("Le véhicule est il assuré ? O/N ");

vehicule.setAssure(assurance === "O"? true:false);

// Controle couleur
let newCouleur = prompt("Choisir la couleur du véhicule :");

//Controle essence
let newEssence = parseInt(prompt("Ajouter de l'essence : "));

//Controle se déplacer
let vitesse = parseInt(prompt("A quelle vitesse roulez vous ?"));
let distance = parseInt(prompt("Sur quelle distance ?"));

// Affichage
console.log(vehicule.repeindre(newCouleur));
console.log(vehicule.mettreEssence(newEssence));
console.log(vehicule.seDeplacer(distance,vitesse));

console.log(vehicule.message());

