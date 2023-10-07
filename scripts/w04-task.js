/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = 
{
    name: "Levi Johnson", 
    photo: 
    {
        path:'images/templePic.jpg',
        name: 'Prolie image of Levi Johnson'
    },
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
document.querySelector('#src').setAttribute = myProfile.photo.path;
document.querySelector('#alt').setAttribute = myProfile.photo.name;

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
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement('dt');
    dt.textContent = place;
    document.querySelector('#places-lived').appendChild(dt);
})

myProfile.placesLived.forEach(length =>{
    let dd = document.createElement('dd');
    dd.textContent = length;
    document.querySelector('#places-lived').appendChild(dd);
    
})
