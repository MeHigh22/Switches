let chiffre = +prompt("Donne un chiffre");

switch(chiffre % 2){
    case (0):
        alert("Le nombre est un mulitple de 2")
    break;
    case(1):
        alert("Le nombre n'est pas un multiple de deux")
    break;
    default:
    alert("Ceci n'est pas un nombre")

}