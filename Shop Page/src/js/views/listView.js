import { elements } from './base';

export const renderItem = (item) => {

    const markup = `
        <li class="list__shoppingCart__item" data-itemid=${item.id}>

            <div class="list__shoppingCart__item__count">
                <input type="number" value="${item.count}" step="${item.count}" class="list__shoppingCart__item__input">
                <p>${item.unit}</p>
            </div>
            <p class="list__shoppingCart__item__description">${item.ingredient}</p>
            <button class="list__shoppingCart__item__button">
                <svg class="button--shopItem">
                    <use xlink:href="images/icomoon/sprite.svg#icon-circle-with-cross"></use>
                </svg>
            </button>

        </li>
    `;

    elements.shopList.insertAdjacentHTML('beforeend', markup);

};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};


export const removeMessage = () => {

    const message = document.querySelector('.list__shoppingCart__message');

    if (message) {
        message.parentElement.removeChild(message);
    }

};

export const clearList = () => {

    elements.shopList.innerHTML = '';

};