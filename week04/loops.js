const myInfo = {
    name: "Thiago Rech",
    photo: "images/photo.jpg",
    favoriteFoods: ["Tacos", "Burritos", "Miojo", "Sushi", "Churrasco"],
    hobbies: ["Singing", "Playing", "Camping"],
    placesLived: [
      {
        place: "Guadalajara, MX",
        length: "2 years",
      },
      {
        place: "Rio de Janeiro, BR",
        length: "1 year",
      },
      {
        place: "Campinas, BR",
        length: "1 year",
      },
    ],
  };
  
  // Activity 1: Using loops to output favorite foods to the DOM
  
  // Using forEach
  const foodsElement = document.querySelector('#favorite-foods');
  
  function createAndAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
  }
  
  myInfo.favoriteFoods.forEach(createAndAppendFoodItem);
  
  // Using map
  const foodsElementMap = document.querySelector('#favorite-foods');
  
  function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
  }
  
  const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
  foodsElementMap.append(...foodListElements);
  
  // Activity 2: Simplification of the map example
  
  document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
    .map((food) => `<li>${food}</li>`)
    .join("");
  
  // Activity 3: Making the code more reusable
  
  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }
  
  function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  
  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  const foodsElementReuse = document.querySelector("#favorite-foods");
  const placesElementReuse = document.querySelector("#places-lived");
  
  foodsElementReuse.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
  );
  placesElementReuse.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
  );
  