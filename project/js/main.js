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
    freeGame()
});



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
});

function freeGame(){
    let cards = document.querySelectorAll(".card");
    console.log(cards)
    cards.forEach((card)=> 
            card.parentElement.remove());
    const FreeGames = data.forEach((game)=>{
        game.filter((price)=> price.value === "Free")
    })
    FreeGames.forEach((game)=>{
    const anotherObject = document.createElement("div");
    DOMSelectors.container.insertAdjacentHTML(beforeend,`<h2 class="card-title">${game.name}</h2>
    <img src="${game.picture}" alt="picture" class="card-img">
    <h3 class="card-price">${game.price}</h3>
    `)
    anotherObject.classList.add("card")
    DOMSelectors.cardlist.appendChild(anotherObject)
})};