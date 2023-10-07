/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = 
{
    name: "Levi Johnson", 
    photo: { path: 'images/templePic.jpg', altName: 'Picture of Levi Johnson'},
    favoriteFoods: ['Pizza','Tacos','Pasta','Burgers'],
    hobbies: ['Basketball','Golf','Weightlifting','Programming'],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Rexburg, Idaho',
        length: '2 years'
    },
    {
        place: 'Ogden, Utah',
        length: '1 year'
    },
    {
        place: 'Nairobi, Kenya',
        length: '2 years'
    },
    {
        place: 'Sahurarita, Arizona',
        length: '5 years'
    },
    {
        place: 'Sweet Springs, Missouri',
        length: '4 years'
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo.path;
photoElement.alt = myProfile.photo.altName;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobbie =>{
    let ul = document.createElement('ul');
    ul.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(ul);
})


/* Places Lived DataList */
const placesLivedElement = document.getElementById("places-lived");

myProfile.placesLived.forEach(info => {
    let dt = document.createElement("dt");
    dt.textContent = info.place;

    let dd = document.createElement("dd");
    dd.textContent = info.length;

    placesLivedElement.appendChild(dt);
    placesLivedElement.appendChild(dd);
});
