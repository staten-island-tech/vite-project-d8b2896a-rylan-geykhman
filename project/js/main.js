import '../style.css';
import { data } from "./games";

const DOMSelectors = {
    container: document.querySelector(".container"),
    cardlist: document.querySelector(".cardlist"),
    body: document.querySelector(".body"),
    button: document.querySelector("#button")
};

DOMSelectors.button.addEventListener("click", function (event) {
    event.preventDefault()
    shooterGame()
});

function createCards(){
    data.forEach((game)=>{
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

function shooterGame(){
    let cards = document.querySelectorAll(".card");
    console.log(cards)
    cards.forEach((card)=> 
            card.parentElement.remove());
    const ShooterGames = data.filter((type)=> type.genres.includes("Shooter"))
    console.log(ShooterGames)
    ShooterGames.forEach((game)=>{
        const newObject = document.createElement("div");
        newObject.innerHTML =
            ` 
            <h2 class="card-title">${game.name}</h2>
            <img src="${game.picture}" alt="picture" class="card-img">
            <h3 class="card-price">${game.price}</h3>
            `
        newObject.classList.add("card")
        DOMSelectors.cardlist.appendChild(newObject)
})
}

/* function createCards(data){
    const newObject = document.createElement("div");
    data.forEach((game)=> newObject.insertAdjacentHTML(
        "beforeend",
        `<div class="card"> 
        <h2 class="card-title">${game.name}</h2>
        <img src="${game.picture}" alt="picture" class="card-img">
        <h3 class="card-price">${game.price}</h3>
        </div>`
    ))
} */

createCards(data)