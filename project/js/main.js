import '../style.css';
import { data } from "./games";
import { DOMSelectors } from "./dom";

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

DOMSelectors.DLCButton.addEventListener("click", function (event) {
    event.preventDefault()
    RachelLovesDLC()
});

DOMSelectors.resetButton.addEventListener("click", function (event) {
    event.preventDefault()
    createCards(data);
});

DOMSelectors.modeSwitch.addEventListener("click", function (event) {
    event.preventDefault()
    if (DOMSelectors.body.classList.contains("light")) {
        DOMSelectors.body.classList.remove("light")
        DOMSelectors.body.classList.add("dark")
    } else {
        DOMSelectors.body.classList.remove("dark")
        DOMSelectors.body.classList.add("light")
    }
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

function RachelLovesDLC(){
    const DLCGames = data.filter((game)=> game.dlc === true)
    createCards(DLCGames)
}

/* function filters(){
    let buttons = document.querySelectorAll(".button")
    buttons.forEach((btn)=> btn.addEventListener("click", function(){
        let category = btn.textContent.toLowerCase()
        let newArr = data.filter((game)=> game.type.includes(category))
        DOMSelectors.cardlist.innerHTML = "";
        createCards(newArr)
    }))
}

filters() */