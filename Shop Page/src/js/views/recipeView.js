import { elements } from './base';

const renderIngredient = (ingredient) => {

    const markup = `
        <li class="list__content__ingredient">
            <svg class="list__content__ingredient__svg">
                <use xlink:href="images/icomoon/sprite.svg#icon-info"></use>
            </svg>
            <div class="list__content__ingredient__count text--ingredients">${ingredient.count}</div>
            <div class="list__content__ingredient__content text--ingredients">
                <span class="list__content__ingredient__unit text--ingredients">${ingredient.unit}</span>
                ${ingredient.ingredient}
            </div>
        </li>
    `;

    return markup;

};

export const renderRecipe = (recipe) => {

    const markup = `

        <figure class="list__content__figure">
            <img src="${recipe.img}" alt="${recipe.title}" class="list__content__image">
        </figure>

        <h1 class="list__content__title header--list__content">${recipe.title}</h1>

        <div class="list__content__servings">
            <div class="list__content__servings__details">
                <span class="list__content__servings__count text--servings">90</span>
                <span class="list__content__servings__text text--servings">MINUTES</span>
            </div>
            <div class="list__content__servings__details">
                <span class="list__content__servings__count text--servings">5</span>
                <span class="list__content__servings__text text--servings">SERVINGS</span>
            </div>
            <button class="list__content__servings__button">
                <svg class="button--heart">
                    <use xlink:href="images/icomoon/sprite.svg#icon-heart"></use>
                </svg>
            </button>
        </div>

        <div class="list__content__main">

            <ul class="list__content__ingredients">

                ${recipe.ingredients.map(el => renderIngredient(el)).join('')}

            </ul>

            <div class="list__content__add">
                <button class="list__content__add__button button--addToCart">Add to Cart</button>
            </div>

        </div>
    `;

    elements.recipeContent.insertAdjacentHTML('afterbegin', markup);

};


export const clearRecipe = () => {

    elements.recipeContent.innerHTML = "";

};