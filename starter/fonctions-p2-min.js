/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min()n'existe pas,
	déclarez la fonction calcMin pour qu'elle retroune
	le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
	- le minimum entre 4.5 et 5
	- le minimum entre 19 et 9
	- le minimum entre 1 et 1
N.B. Faites deux versions :
	- en utilisant la syntaxe classique
	- en utilisant une arrow function
*/

// synatxe classique

function calcMin1(number1, number2) {
    if (number1 > number2) {
        return number2;
    }
    return number1;
}

console.log(calcMin1(4.5, 5));
console.log(calcMin1(19, 9));
console.log(calcMin1(1, 1));


// arrow function

const calcMin2 = (number1, number2) => {
    if (number1 > number2) {
        return number2;
    }
    return number1;
}

console.log(calcMin2(4.5, 5));
console.log(calcMin2(19, 9));
console.log(calcMin2(1, 1));


// arrow function écriture encore plus concise

const calcMin3 = (number1, number2) => (number1 > number2) ? number2 : number1;

console.log(calcMin3(4.5, 5));
console.log(calcMin3(19, 9));
console.log(calcMin3(1, 1));


