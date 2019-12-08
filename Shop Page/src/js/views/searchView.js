import { elements } from './base';

export const getQuery = function(){

    let query = elements.searchInput.value;

    return query;

};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {

    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(displayResult);

    renderButtons(page, recipes.length, resPerPage);

};

export const clearInput = () => {

    elements.searchInput.value = '';

};

export const clearResults = () => {

    elements.searchResults.innerHTML = '';
    elements.searchPage.innerHTML = '';

};

export const highlightRecipe = id => {

    const listArr = Array.from(document.querySelectorAll('.list__result'));
    listArr.forEach(el => {
        el.classList.remove('highlight');
    });
    document.querySelector(`.list__result[href="#${id}"]`).classList.add('highlight');

};

const displayResult = recipe => {

    const markup = `
        <li class="list__element">
            <a href="#${recipe.recipe_id}" class="list__result">

                <figure class="list__result__thumbnail">
                    <img src="${recipe.image_url}" alt="thumbnail" class="list__result__image">
                </figure>
            <div class="list__result__info">
                <h2 class="list__result__heading header--results">
                    ${recipeTitleLength(recipe.title)}
                </h2>
                <p class="list__result__text text--results">
                    ${recipe.publisher}
                </p>
            </div>

            </a>
        </li>
    `;

    elements.searchResults.insertAdjacentHTML('afterbegin', markup);

};

export const recipeTitleLength = (title, limit = 17) => {

    if (title.length > limit) {
        
        const newTitle = [];
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')} ...`;
    }

    return title;

};

const renderButtons = (page, numResults, resPerPage) => {

    const pages = Math.ceil(numResults / resPerPage);
    let button;

    if (page === 1 && pages > 1) {

        // Button to go to the next page
        button = createButton(page, 'Next');

    } else if (page === pages && pages > 1) {

        // Button to go to the previous page
        button = createButton(page, 'Previous');

    } else if (page < pages) {

        // Both buttons
        button = `${createButton(page, 'Previous')}
                    ${createButton(page, 'Next')}`;

    }

    elements.searchPage.insertAdjacentHTML('afterbegin', button);

};

const createButton = (page, type) => `<button class="list__button button--list" data-goto=${type === 'Previous' ? page - 1 : page + 1}>${type}</button>`;

    
