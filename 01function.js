console.log("01 - Fonctions");

function additionner(nb1,nb2){

    var result= nb1+nb2;
    return result;
}

var nombre1 = 10;
var nombre2 = 20;
var resultat1 = additionner(nombre1,nombre2);

console.log("resultat1 ="+resultat1);

var somme=additionner;

var resultat2 = somme(nombre1,nombre2);

console.log("resultat2 ="+resultat2);

function multiplier(nb1,nb2){
    var result= nb1*nb2;
    return result;
}

var multiplication = multiplier;

var resultat3 = multiplication(nombre1,nombre2);

console.log("resultat3 ="+resultat3);


function afficherOperation(nomOperation,operation,nb1,nb2){

    console.log(nomOperation+" ("+nb1+","+nb2+") = "+operation(nb1,nb2));
}

afficherOperation("Somme",somme,20,40);
afficherOperation("Multiplication",multiplication,10,20);
afficherOperation("Soustraction",function soustraire(nb1,nb2){
    var result= nb1-nb2;
    return result;
},15,5);