const baseUrl = https://api.nasa.gov/planetary/apod?api_key=hJ5RIMmDbh0gds3b68OE8jQJ2IR4WZ1Qp0DF2QlL

const randNum = Math.floor(Math.random() * (151 - 2) + 2)
const response = await fetch(`${baseURL}${randNum}`);
console.log(response);
const json = await response.json();
displayPokemon(json)
console.log(json)