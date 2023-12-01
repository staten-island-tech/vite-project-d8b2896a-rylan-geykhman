import '../style.css';
import { data } from "./games";

const DOMSelectors = {
    container: document.querySelector("#container"),
    cardlist: document.querySelector(".cardlist"),
    body: document.querySelector(".body"),
    shooterButton: document.querySelector("#shooterButton"),
    freeButton: document.querySelector("#freeButton"),
    resetButton: document.querySelector("#resetButton"),
    multiplayerButton: document.querySelector("#multiplayerButton"),
    noApproval: document.querySelector("#whalenButton"),
    darkMode: document.querySelector("#darkMode"),
    lightMode: document.querySelector("#lightMode")
};

DOMSelectors.shooterButton.addEventListener("click", function (event) {
    event.preventDefault()
    shooterGame()
});

DOMSelectors.freeButton.addEventListener("click", function (event) {
    event.preventDefault()
    freeGame()
});

DOMSelectors.multiplayerButton.addEventListener("click", function (event) {
    event.preventDefault()
    multiplayerGame()
});

DOMSelectors.noApproval.addEventListener("click", function (event){
    event.preventDefault()
    WhalenNotApproved()
})

DOMSelectors.resetButton.addEventListener("click", function (event) {
    event.preventDefault()
    createCards(data);
});

DOMSelectors.darkMode.addEventListener("click", function (event) {
    event.preventDefault()
    DOMSelectors.body.classList.add("dark")
    DOMSelectors.body.classList.remove("light")
})

DOMSelectors.lightMode.addEventListener("click", function (event) {
    event.preventDefault()
    DOMSelectors.body.classList.add("light")
    DOMSelectors.body.classList.remove("dark")
})

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
    const FreeGames = data.filter((game)=> game.price == "Free")
    createCards(FreeGames)
}

function multiplayerGame(){
    const MultiplayerGames = data.filter((mp)=> mp.multiplayer === true)
    createCards(MultiplayerGames)
}

function WhalenNotApproved(){
    const WhalenGames = data.filter((game)=> game.MrWhalenApproval === false)
    createCards(WhalenGames)
}