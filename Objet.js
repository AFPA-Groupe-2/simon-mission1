class Vehicule{
	/*Pas de "function" devant le constructeur
	et les autres méthodes */
	constructor(marque,nom,puissance){
		this.marque = marque;
		this.nom = nom;
		this.puissance = puissance ;
		
	}
		affiche(){
			alert('Je suis un véhicule ' + this.marque + ' de type ' + this.nom + ' d\’une puissance de '+ this.puissance +' ch.') ;
	};
}

let tracteur = new Vehicule('Renault', 'Ares', 100);
let voiture= new Vehicule('Renault','Twingo',5);
alert(tracteur.nom) ;
tracteur.affiche();
voiture.affiche();


class Moto extends Vehicule{
	constructor(marque,nom,puissance,nbRoues){
		super(marque,nom,puissance); //Appelle le constructeur parent
		this.nbRoues= nbRoues;
	}
	affiche(){
	alert('Je suis un véhicule à '+ this.nbRoues + ' roues !')
	}
}
let yam = new Moto('Yamaha', 'Super Ténéré', 112,2);
yam.affiche() ;
