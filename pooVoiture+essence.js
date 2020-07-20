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
            msg = "Vous avez ajouté " + repEssence ;
        } else if (totalEssence > this.getCapadureservoir()){
            msg = "Trop d'essence";
        } else {
            this.setNivessence(totalEssence);
            msg = "Vous avez fait le plein";
        }
        return msg ;
    }
    message(){
        return `${vehicule.getTbldebord()}, votre numero d'immatriculation est ${vehicule.getImmatriculation()}, ${vehicule.getCouleur()}, 
        le poids est ${vehicule.getPoids()}, la puissance est ${vehicule.getPuissance()}, le réservoir
        fait ${vehicule.getCapadureservoir()}, vous avez ${vehicule.getNivessence()} litre d'essence, il y a ${vehicule.getNbrplace()} 
        places, ${vehicule.getAssure()? "Assuré":"Non assuré"}.`;
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

// Affichage
console.log(vehicule.repeindre(newCouleur));
console.log(vehicule.mettreEssence(newEssence));
console.log(vehicule.message());

