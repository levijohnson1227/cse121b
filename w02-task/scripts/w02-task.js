/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Levi Johnson";
let currentYear = "2023";
let profilePicture = 'C:\Users\lwjoh\Downloads\BYUI_fall_2023\cse121b\w02-task\images\templePic.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profilePicture')



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt',`<strong>'Prolie image of ${fullName}'</strong>`);





/* Step 5 - Array */
const favoriteFoods = ['Pizza','Tacos','Pasta','Burgers'];




