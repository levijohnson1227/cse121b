/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Levi Johnson";
let currentYear = "2023";
let profilePicture = 'images/templePic.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img[src="images/placeholder.png"]');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt',`<strong>'Prolie image of ${fullName}'</strong>`);





/* Step 5 - Array */
const favoriteFoods = ['Pizza','Tacos','Pasta','Burgers'];
foodElement.textContent = favoriteFoods;

let newFood = "Bacon";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

