/*****************************
* 021 - Function Statements and Expressions
*/

/*
1. Déclarer, en utilisant une fonction expression,
la fonction whatDoYouDo qui prend deux paramètres, job et firstName.
Cette fonction retourne le prénom suivi d'une phrase qui décrit le job de la personne
pour différents cas de job :
    - si c'est teacher, "teaches kids how to code"
    - si c'est driver, "drives a cab in Lisbon"
    - si c'est designer, "designs beautiful websites"
    - dans tous les autres cas, "does something else"
2. Utiliser cette fonction pour afficher dans la console ce que font
    - John (teacher)
    - Jane (designer)
    - Mark (retired)
*/

function whatDoYouDo(job, firstName) {
    switch (job) {
        case `teacher`:
            return `${firstName} teachers kids how to code`;
        case `driver`:
            return `${firstName} drives a cab in Lisbon`;
        case `designer`:
            return `${firstName} designs beautiful website`;
        default :
            return `${firstName} does something else`;
    }
}

console.log(whatDoYouDo(`teacher`, `John`));
console.log(whatDoYouDo(`designer`, `Jane`));
console.log(whatDoYouDo(`retired`, `Mark`));
