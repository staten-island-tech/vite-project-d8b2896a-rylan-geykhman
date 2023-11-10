import './style.css';
import { data } from "./games";
import { DOMSelectors } from './dom';



const thing = {
    names: data.name.value,
    pictures: data.picture.value,
    price: data.price.value,
}

function insert(thing, DOMSelectors) {
    DOMSelectors.container.insertAdjacentHTML("afterbegin", 
    ` <div class="card">
        <h2 class="card-title">${thing.names}</h2>
            <img src="${thing.pictures}" alt="picture" class="card-img">
        <h3 class="card-emails">${thing.price}</h3>
    </div>`);
}

insert(thing, DOMSelectors);

