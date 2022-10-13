/*
FONCTIONS - PRÉPA 4 :  Date valide - version 2
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
- Déclarez deux fonctions : 
	- isBissextile retroune true ou flase selon que l'année est bissextile ou pas
	- isValid retroune true ou flase selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
	avant d'afficher votre message dans la console
*/

/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/
/* Aide supplémentaire
 - Vous pouvez stocker dans une varaible maxJours le nombre de jours autorisés pour chaque mois :
	- traiter le cas du mois de février où ce sera 28 ou 29 selon que l'année est bissextile ou pas ;
	- puis traiter les cas où ce sera 30 ;
	- dans les autres cas, c'est 31 ;
 - Il ne reste plus ensuite qu'à comparer le jour entré par l'utilisateur avec maxJour
 	pour retourner true ou fasle selon que la date est valide ou pas.
*/

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    }
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

function isValidDate(day, month, year) {
    if (day < 1 || day > 31) {
        return false;
    }
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            if (day <= 30) {
                return true;
            }
            break;
        case 2:
            if (isLeapYear(year) && day <= 29) {
                return true;
            }
            if (!isLeapYear(year) && day <=28) {
                return true;
            }
            break;
        default:
            if (day <= 31) {
                return true;
            }
    }
    return false;
}

console.log(isValidDate(31, 1, 2019)); // le 31 janvier 2019 est une date valide
console.log(isValidDate(28, 2, 2019)); // le 28 février 2019 est une date valide
console.log(isValidDate(29, 2, 2019)); // le 29 février 2019 n'est PAS une date valide
console.log(isValidDate(29, 2, 2020)); // le 29 février 2020 est une date valide
console.log(isValidDate(30, 2, 2020)); // le 30 février 2020 n'est PAS une date valide
console.log(isValidDate(30, 4, 2020)); // le 30 avril 2020 est une date valide
console.log(isValidDate(31, 4, 2020)); // le 31 avril 2020 n'est PAS une date valide