// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      // execute the callback
      doThis(data);
    }
}
async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}
function doStuff(data) {
    results = data;
    const outputElement = document.querySelector("#output");
    const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}
function compare(a, b) {
    if (a.name > b.name) {
      // sort b before a
      return 1;
    } else if (a.name < b.name) {
      // a and b different but unchanged (already in the correct order)
      return -1;
    } else return 0; // a and b are equal
}
  
function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}
function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    let pokeList = data.results;
    // sort our list before output it
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((currentItem) => {
      const html = `<li>${currentItem.name}</li>`;
      //note the += here
      pokeListElement.innerHTML += html;
    });
}
getPokemon(url, doStuff);
console.log("second: ", results);
// Notice that by just passing a different callback function in
// we can totally change what happens when the data comes back.
// It's like we gave the getPokemon function superpowers!
getPokemon(urlList, doStuffList);