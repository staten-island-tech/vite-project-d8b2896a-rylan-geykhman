import '../style.css';
import { data } from "./games";

const DOMSelectors = {
    container: document.querySelector("#container"),
    cardlist: document.querySelector(".cardlist"),
    body: document.querySelector(".body"),
    shooterButton: document.querySelector("#shooterButton"),
    freeButton: document.querySelector("#freeButton"),
    resetButton: document.querySelector("#resetButton")
};

DOMSelectors.shooterButton.addEventListener("click", function (event) {
    event.preventDefault()
    shooterGame()
});

DOMSelectors.freeButton.addEventListener("click", function (event) {
    event.preventDefault()
    freeGame()
});

DOMSelectors.resetButton.addEventListener("click", function (event) {
    event.preventDefault()
    createCards(data);
});

function createCards(arr){
    DOMSelectors.cardlist.innerHTML = "";
    arr.forEach((game)=>{
        const newObject = document.createElement("div");
        newObject.innerHTML =
            ` 
            <h2 class="card-title">${game.name}</h2>
            <img src="${game.picture}" alt="picture" class="card-img">
            <h3 class="card-price">${game.price}</h3>
            `
        newObject.classList.add("card")
        DOMSelectors.cardlist.appendChild(newObject)
})};

createCards(data);

function shooterGame(){
    const ShooterGames = data.filter((type)=> type.genres.includes("Shooter"))
    createCards(ShooterGames)
}

function freeGame(){
    const FreeGames = data.filter((price)=> price.value = "Free")
    createCards(FreeGames)
}