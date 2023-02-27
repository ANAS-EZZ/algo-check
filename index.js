var str= "welcome to go my code";

console.log("nombre de caractere" ,str.length);


var str= "welcome to go my code"
const mots=str.split (" ");
const nombreDeMots=mots.length;
console.log(nombreDeMots);

var phrase = "welcome to go my code";
var nombreDeVoyelles = 0;
const voyelles = ['w', 'e', 't', 'o', 'm', 'c'];

for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
        nombreDeVoyelles++;
    }
}

console.log("Le nombre de voyelles dans la phrase est: " + nombreDeVoyelles);