console.log("02 - Tableaux");

var villes =['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//afficher villes avec forEach
villes.forEach(function(element){
    console.log(element)
});

//recuperer resultat si toutes ls villes contiennent 'a' avec every
var lettreADansToutesLesVilles = villes.every(function(element){
    return element.indexOf("a")>=0;
});
console.log("lettreADansToutesLesVilles = "+lettreADansToutesLesVilles);

//recuperer resultat si au moins une ville contient '-' avec some
var auMoinsUneVilleAvecUnTiret = villes.some(function(element){
    return element.indexOf("-")>=0;
});
console.log("auMoinsUneVilleAvecUnTiret = "+auMoinsUneVilleAvecUnTiret);

//recuperer tableau des villes sans tiret etsans espace avec filter
var villesSansTiretSansEspace = villes.filter(function(element){
    if(element.indexOf("-")>=0 ===false && element.indexOf(" ")>=0 ===false){
        return element
    }
});
console.log("villesSansTiretSansEspace = "+villesSansTiretSansEspace);

//chainer les fonctions : filtrer les villes se terminant par s et les mettre en majuscule 
var villesMajusculeSeTerminantParS = villes.filter(function(element){
    return element.lastIndexOf("s");
}).map(function(element){
    return element.toLocaleUpperCase();
});

console.log("villesMajusculeSeTerminantParS = "+villesMajusculeSeTerminantParS);