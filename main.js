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
console.log('exo3:');
console.log(exo3);
//or 
let exo3bis = document.getElementById('titreNiv3').previousElementSibling.innerText;
console.log(exo3bis);
//or
let exo3bisbis = document.querySelector('h3#titreNiv3').previousElementSibling.innerText;
console.log(exo3bisbis);

// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling

let exo4 = document.getElementsByTagName('p')[1].nextElementSibling.innerText;
console.log('exo4:');
console.log(exo4);
//or
let exo4bis = document.getElementsByClassName('petitParagraphe')[0].nextElementSibling.innerText;
console.log(exo4bis);
//or
let exo4bisbis = document.querySelector('p.petitParagraphe').nextElementSibling.innerText;
console.log(exo4bisbis);

// ### 5. Affiche le parent des éléments ayant comme class "important" 

let exo5 = document.getElementsByClassName('important')[0,1,2,3].parentElement;
console.log('exo5:');
console.log(exo5);
//or
let exo5bisbis = document.getElementsByTagName('li')[0,1,2,3].parentElement;
console.log(exo5bisbis);
//or
let exo5bisbisbis = document.querySelectorAll('.important')[0,1,2,3].parentElement;
console.log(exo5bisbisbis);

// ### 6. Affiche le premier enfant, du parent de "listElements"

let exo6 = document.getElementById('listElements').parentElement.firstElementChild.innerText;
console.log('exo6:');
console.log(exo6);
//or 
let exo6bis = document.getElementsByTagName('ul')[0].parentElement.firstElementChild.innerText;
console.log(exo6bis);
//or
let exo6bisbis = document.querySelector('ul#listElements').parentElement.firstElementChild.innerText;
console.log(exo6bisbis);

// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"

let exo7 = document.getElementsByClassName('important')[3].nextElementSibling.innerText;
console.log('exo7:');
console.log(exo7);
//or
let exo7bis = document.getElementsByTagName('li')[3].nextElementSibling.innerText;
console.log(exo7bis);
//or
let exo7bisbis = document.querySelectorAll('.important')[3].nextElementSibling.innerText;
console.log(exo7bisbis);

// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let exo8 = document.getElementById('textGeneral').previousElementSibling.previousElementSibling.innerText;
console.log('exo8:');
console.log(exo8);
//or
let exo8bis = document.getElementsByTagName('p')[3].previousElementSibling.previousElementSibling.innerText;
console.log(exo8bis);
//or
let exo8bisbis = document.querySelector('p#textGeneral').previousElementSibling.previousElementSibling.innerText;
console.log(exo8bisbis);

// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let exo9 = document.getElementsByTagName('span')[2].parentElement.previousElementSibling.innerText;
console.log('exo9:');
console.log(exo9);
//or
let exo9bis = document.getElementById('footer').children[2].children[0].parentElement.previousElementSibling.innerText;
console.log(exo9bis);
//or
let exo9bisbis = document.querySelectorAll('span')[2].parentElement.previousElementSibling.innerText;
console.log(exo9bisbis);

// ### 10. En partant de Nicolas, affiche Primo
let exo10 = document.getElementsByTagName('b')[2].parentElement.parentElement.previousElementSibling.children[0].children[0].innerText;
console.log('exo10:');
console.log(exo10);
//or
let exo10bis = document.getElementById('footer').children[2].children[0].children[0].parentElement.parentElement.previousElementSibling.children[0].children[0].innerText;
console.log(exo10bis);

// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"

let exo11 = document.querySelector('p.grandParagraphe').innerText;
console.log('exo11:');
console.log(exo11);
//or
let exo11bis = document.querySelectorAll('.grandParagraphe')[0].innerText;
console.log(exo11bis);

// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle
let exo12 = document.querySelectorAll('li');
console.log('exo12:');
let exo12bis = Array.from(exo12);
exo12bis.forEach(li => {
    console.log(li.innerText)
})

//correction

//exo1
let ex1 = document.getElementsByClassName('h3');
console.log('exo1 = ');
console.log(ex1[0]);
//exo2
console.log('exo2 = ');
console.log(ex1[1]);
//exo3
console.log('exo3 = ');
console.log(ex1[1].previousElementSibling);
//exo4
console.log('exo4 = ');
let ex4 = document.getElementsByTagName('p')[1].nextElementSibling;
console.log(ex4);
//exo5
console.log('exo5 = ');
let ex5 = document.getElementsByTagName('ul');
console.log(ex5[0]);
//exo6
console.log('exo6 = ');
let ex6 = document.getElementsByTagName('ul')[0].parentElement.firstElementChild;
console.log(ex6);
//exo7
console.log('exo7 = ');
let ex7 = document.getElementsByTagName('li')[4];
console.log(ex7);
//exo8
console.log('exo8 = ');
let ex8 = document.getElementsByTagName('p')[4];
console.log(ex8);
//exo9
console.log('exo9 = ');
let ex9 = document.getElementsByTagName('span')[1].parentElement.nextElementSibling;
console.log(ex9);
//exo10
console.log('exo10 = ');
let ex10 = document.getElementsByTagName('b')[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
console.log(ex10);
//exo11
let ex11 = document.querySelector('p.grandParagraphe');
console.log(ex11);
//exo12
let ex12 = document.querySelectorAll('li');
ex12.forEach(element => {
    console.log(element);
});