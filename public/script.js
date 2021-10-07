const baseUrl = "https://api.nasa.gov/planetary/apod?";
let key = "api_key=W6cplbdwJg2SobRACS0Dk0eRCRrOnbFtR7OIggPl";
let param = "&count=1";
let url = baseUrl + key + param;
console.log(url)
let btn = document.querySelector("button");

btn.addEventListener("click", (fetchResults));

// fetch(url)
// .then(function(picInfo){
//     return picInfo.json();
// })
// .then(function(json){
//     displayResults(json);
//     btn.innerText = "Click to see more!";
// })

// const randNum = Math.floor(Math.random() * (151 - 2) + 2)
// const response = await fetch(`${baseURL}${randNum}`);
function fetchResults() {
    fetch(url)
    .then(function(result){
        return result.json();
    }).then(function(json) {
        displayResults(json);
    })
    console.log(json);
function displayResults(json) {
    console.log(json);
    let newImage = document.createElement('img');
    newImage.src = json.url;
}

// let img = document.getElementById("image_box")
// let dtl = document.getElementById("description_box")

// while(randomDate.firstChild) {
//     randomDate.removeChild
// }

// picTitle.innerText = `${json[0].title}`;
// picImage.src = json[0].hdurl;
// picImage.alt = "Astronomy image";
// picExplanation.innerText = `${json[0].explanation}`;

// description_box.appendChild(dtl);

// }}