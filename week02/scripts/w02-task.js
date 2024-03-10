/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Thiago Rech';
let currentYear = 2024;
let profilePicture = 'images/trechds.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);

/* Step 5 - Array */
let foodList = ['Sushi', 'Tacos', 'Burritos', 'Miojo', 'Pizza', 'Hamburguer'];
foodElement.textContent = foodList;
const newFavFood = 'Açaí';
foodList.push(newFavFood);
foodElement.innerHTML += `<br>${foodList}`;
foodList.shift();
foodElement.innerHTML += `<br>${foodList}`;
foodList.pop();
foodElement.innerHTML += `<br>${foodList}`;





