import '../style.css';
import { data } from "./games";

const DOMSelectors = {
    container: document.querySelector(".container"),
    cardlist:document.querySelector(".cardlist")
};

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
    data.filter((game)=> game.price.value == "true");
    DOMSelectors.cardlist.appendChild(newObject)
}

DOMSelectors.cardlist.addEventListener("click", function (event) {
    event.preventDefault()
    freeGame()
});