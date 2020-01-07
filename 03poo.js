console.log("03 - POO");

//constructeur Personne avec nom,prenom et pseudo
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + " " + this.prenom + " - " + this.pseudo;
    }
}

function afficherPersonne(Personne) {
    console.log("nom : " + Personne.nom);
    console.log("prenom : " + Personne.prenom);
    console.log("pseudo : " + Personne.pseudo);
    console.log("nom complet : " + Personne.getNomComplet());
}

//instancier 2 objects Personne
var jules = new Personne('LEMAIRE', 'Jules', 'jules77');
var paul = new Personne('LEMAIRE', 'Paul', 'paul44');

afficherPersonne(jules);
afficherPersonne(paul);

//modifier le pseudo
jules.pseudo = "jules44";
console.log(jules.getNomComplet());

console.log(jules.age);
//ajouter l age au constructeur Personne
Personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);
//affecter un age a jules
jules.age = 30;
console.log(jules.age);

//ajouter une methode getInitiales a Personne
Personne.prototype.getInitiales = function () {
    return "Initiales : " + this.prenom.charAt(0) + this.nom.charAt(0)
};
console.log(jules.getInitiales());

//creation objet sans constructeur : notation litterale
var robert = {
    nom: 'LEPREFET',
    prenom: 'Robert',
    pseudo: 'robert77',
    getNomComplet : function(){
        return this.nom + " " + this.prenom + " - " + this.pseudo;
    }
};
afficherPersonne(robert);

//heritage via fonction constructeur
function Client(nom, prenom, pseudo,numeroClient) {
    Personne.call(this,nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return this.numeroClient+" : "+this.nom + " " + this.prenom;
    };
}

var steve = new Client('LUCAS','Steve','steve44','A01');
afficherPersonne(steve);
console.log("Numero client : "+steve.numeroClient);
console.log(steve.getInfos());