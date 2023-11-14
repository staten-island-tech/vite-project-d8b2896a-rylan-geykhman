import './style.css';
import { data } from "./games";

const DOMSelectors = {
    form: document.querySelector(".form"),
    container: document.querySelector(".container"),
    gameName: document.getElementById("name"),
    gamePrice: document.getElementById("price"),
};

//function create() {
    //const thing = {
        //names: DOMSelectors.gameName.value,
        //pictures: DOMSelectors.picture.value,
        //price: DOMSelectors.gamePrice.value,
    //};
//}

/*function insert(thing, DOMSelectors) {
    DOMSelectors.container.insertAdjacentHTML("afterbegin", 
    ` <div class="card">
        <h2 class="card-title">${thing.names}</h2>
            <img src="${thing.pictures}" alt="picture" class="card-img">
        <h3 class="card-emails">${thing.price}</h3>
    </div>`);
}
DOMSelectors.container.addEventListener("load", function (event) {
    event.preventDefault()
    create()
});*/
data.forEach((game)=>{
    const newObject = document.createElement("div");
    newObject.container.insertAdjacentHTML("afterbegin",
        ` <div class="card">
        <h2 class="card-title">${thing.names}</h2>
        <img src="${thing.pictures}" alt="picture" class="card-img">
        <h3 class="card-emails">${thing.price}</h3>
        </div>`)
    
});
