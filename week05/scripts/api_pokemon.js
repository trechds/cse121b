const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);

/* 
Note that the second console.log ran first...then the first one. Remember that in
async programming Javascript does not wait for everything to finish before moving on.
If we had tried to use results immediately it would have failed. Instead we control the
execution of functions to make sure that results is ready BEFORE we use it.
*/