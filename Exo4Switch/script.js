let nbr1 = +prompt("Donne un chiffre");
let op = prompt("Choisis un opérateur");
let nbr2 = +prompt("Donne un second chiffre")


switch (op) {
    case "+":
        alert(`${nbr1} + ${nbr2} = ${nbr1 + nbr2}`)
    break;
        case "-":
        alert(`${nbr1} - ${nbr2} = ${nbr1 - nbr2}`)
    break;
        case "/":
        alert(`${nbr1} / ${nbr2} = ${nbr1 / nbr2}`)
    break;
        case "*":
        alert(`${nbr1} * ${nbr2} = ${nbr1 * nbr2}`)
    break;

    default:
        alert("Ceci n'est pas un chiffre ou un opérateur")
        break;
}