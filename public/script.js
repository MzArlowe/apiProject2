const baseUrl = "https://api.nasa.gov/planetary/apod?";
let key = "api_key=W6cplbdwJg2SobRACS0Dk0eRCRrOnbFtR7OIggPl";
let param = "&count=1";
let url = baseUrl + key + param;
console.log(url)
let btn = document.querySelector("button");

btn.addEventListener("click", (fetchResults));
//This is executing on the initial button click
fetch(url) 
    .then(function (picInfo) {
        return picInfo.json();
    })
    .then(function (json) {
        displayResults(json);
        btn.innerText = "Click to see more!";
    })

function fetchResults() { 
    fetch(url)
        .then(function (result) {
            return result.json();
        }).then(function (json) {
            displayResults(json);
        })
}
function displayResults(json) {
    console.log(json);

    const theImg = document.getElementById("my-image");
    theImg.src = json[0].url

    const dtl = document.getElementById("descriptionBox");
    dtl.innerHTML = json[0].explanation

    const picTitle = document.getElementById("imageTitle");
    picTitle.innerHTML = json[0].title
    
    // set an image tag and change the source of that every single Time.

    // while(dtl.firstChild){
    //     dtl.removeChild(descriptionBox.firstChild);
        
    // while(newImage.firstChild){
    //     newImage.removeChild(img.firstChild);
    // }

    // picTitle.innerText = `${json[0].title}`; //stretch goal//
    // picInfo.src = json[0].hdurl;
    // picInfo.alt = "Astronomy image";
    // descriptionBox.innerText = `${json[0].explanation}`;
}