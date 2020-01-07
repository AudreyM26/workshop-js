console.log("01 - Fonctions");

//fonction additionner
function additionner(nb1,nb2){

    var result= nb1+nb2;
    return result;
}

var nombre1 = 10;
var nombre2 = 20;
var resultat1 = additionner(nombre1,nombre2);

console.log("resultat1 ="+resultat1);

//variable reference a la fonction additionner
var somme=additionner;

var resultat2 = somme(nombre1,nombre2);
console.log("resultat2 ="+resultat2);

//fonction multiplier
function multiplier(nb1,nb2){
    var result= nb1*nb2;
    return result;
}

//variable reference a la fonction multiplier
var multiplication = multiplier;

var resultat3 = multiplication(nombre1,nombre2);
console.log("resultat3 ="+resultat3);

//fonction avec une chaine nomOperation, operation, valeur1, valeur2
function afficherOperation(nomOperation,operation,nb1,nb2){
    console.log(nomOperation+" ("+nb1+","+nb2+") = "+operation(nb1,nb2));
}

//invoquer afficheOperation avec la variable somme
afficherOperation("Somme",somme,20,40);
//invoquer afficheOperation avec la variable multiplication
afficherOperation("Multiplication",multiplication,10,20);
//invoquer afficheOperation avec operation anonyme soustraire
afficherOperation("Soustraction",function soustraire(nb1,nb2){
    var result= nb1-nb2;
    return result;
},15,5);