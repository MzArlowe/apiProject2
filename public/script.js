const baseUrl = "https://api.nasa.gov/planetary/apod?";
let key = "api_key=W6cplbdwJg2SobRACS0Dk0eRCRrOnbFtR7OIggPl";
let param = "&count=1";
let url = baseUrl + key + param;
console.log(url)
let btn = document.querySelector("button");

btn.addEventListener("click", (fetchResults));

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
    // console.log(json);  //if you log this in the console, when you click the button, you will see the objects and arrays pop up!
}
function displayResults(json) {
    console.log(json);

    let img = document.getElementById("imageBox")
    let dtl = document.getElementById("descriptionBox")
    let newImage = document.createElement('img');  //this creates the element needed to push image into it.

    newImage.src = json[0].url;  //this actually sends the img to the element. If you look in the console at the json, you will see how the object is numbered [0].

    img.appendChild(newImage); //This is the only thing I added in your html. <div id="imagePlease"></div> This is what appends the existing element in HTML and the new one created.
    
    while (newImage.firstChild) {
        newImage.removeChild(imageBox)
    }

    picTitle.innerText = `${json[0].title}`;
    picImage.src = json[0].hdurl;
    picImage.alt = "Astronomy image";
    picExplanation.innerText = `${json[0].explanation}`;

    description_box.appendChild(dtl);

}