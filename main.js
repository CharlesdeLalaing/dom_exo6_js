// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content

let exo1 = document.getElementsByTagName('h3')[0].innerText;
console.log('exo1:');
console.log(exo1);
//or
let exo1bis = document.getElementById('content').firstElementChild.innerText;
console.log(exo1bis);
//or 
let exo1bisbis = document.querySelector('div').firstElementChild.innerText;
console.log(exo1bisbis);
//or 
let exo1bisbisbis = document.getElementsByTagName('div')[0].firstElementChild.innerText;
console.log(exo1bisbisbis);

// ### 2. Affiche le titreNiv3

let exo2 = document.getElementsByTagName("h3")[1].innerText;
console.log('exo2:');
console.log(exo2);
//or
let exo2bis = document.querySelector('h3#titreNiv3').innerText;
console.log(exo2bis);
//or 
let exo2bisbis = document.getElementById('titreNiv3').innerText;
console.log(exo2bisbis);

// ### 3. Affiche l'élément qui précède le titreNiv3

let exo3 = document.getElementsByTagName('h3')[1].previousElementSibling.innerText;
console.log('exo4:');
console.log(exo3);
//or 
let exo3bis = document.getElementById('titreNiv3').previousElementSibling.innerText;
console.log(exo3bis);
//or
let exo3bisbis = document.querySelector('h3#titreNiv3').previousElementSibling.innerText;
console.log(exo3bisbis);

// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
// ### 5. Affiche le parent des éléments ayant comme class "important" 
// ### 6. Affiche le premier enfant, du parent de "listElements"
// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
// ### 10. En partant de Nicolas, affiche Primo
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle

