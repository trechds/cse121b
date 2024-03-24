/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Thiago Rech",
    photo: "images/photo.png",
    favoriteFoods: [
      'Tacos',
      'Burritos',
      'Sushi',
      'Pizza',
      'Hamburger',
      'Miojo'
    ],
    hobbies: [
      'Camping',
      'Hunting',
      'Playing Guitar',
      'Signing',
      'Coding'
    ],
    placesLived: []
  };
  
  /* Populate Profile Object with placesLive objects */
  
  myProfile.placesLived.push(
    {
      place: 'Guadalajra, Jalisco-Mexico',
      length: '2 years'
    },
    {
      place: 'Rio de Janeiro, RJ-Brazil',
      length: '1 year'
    },
    {
      place: 'Campinas, SP-Brazil',
      length: '3 years'
    }
  );
  
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector('#name').textContent = myProfile.name;
  
  /* Photo with attributes */
  document.querySelector('#photo').setAttribute('src', myProfile.photo);
  document.querySelector('#photo').setAttribute('alt', myProfile.name);
  
  /* Favorite Foods List*/
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  /* Hobbies List */
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  /* Places Lived DataList */
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  