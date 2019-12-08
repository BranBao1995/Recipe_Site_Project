
export const elements = {

    searchField: document.querySelector('.search--nav'),
    searchInput: document.querySelector('.search--nav__input'),
    searchResults: document.querySelector('.list__results'),
    searchLoader: document.querySelector('.list__list'),
    searchPage: document.querySelector('.list__buttons'),
    searchButton: document.querySelector('.list__button'),
    recipeContent: document.querySelector('.list__content'),
    shopList: document.querySelector('.list__shoppingCart__list'),
    likeList: document.querySelector('.list__liked__list')

};

export const key = 'ca3e07634b6bb28eceb4f8bcbec1db22';
export const proxy = 'https://cors-anywhere.herokuapp.com/';

export const renderLoader = (parent) => {

    const markup = `<div class="list__loader">
            
                        <svg class="list__loader__icon">
                            <use xlink:href="images/icomoon/sprite.svg#icon-ccw"></use>
                        </svg>

                    </div>`;

    parent.insertAdjacentHTML('afterbegin', markup);

};

export const removeLoader = () => {

    const loader = document.querySelector('.list__loader');

    if (loader) {

        loader.parentElement.removeChild(loader);

    }

};

export const hideLikeList = () => {

    document.querySelector('.list__liked').style.zIndex = "10";
    document.querySelector('.list__liked').style.opacity = "0";
    document.querySelector('.list__liked').style.visibility = "hidden";
    document.querySelector('.list__liked').style.transition = "all .2s";

    document.querySelector('.list__shoppingCart').style.zIndex = "50";
    document.querySelector('.list__shoppingCart').style.opacity = "1";
    document.querySelector('.list__shoppingCart').style.visibility = "visible";
    document.querySelector('.list__shoppingCart').style.transition = "all .2s";
    document.querySelector('.list__shoppingCart').style.transitionDelay = ".3s";

};


export const showLikeList = () => {

    document.querySelector('.list__shoppingCart').style.zIndex = "10";
    document.querySelector('.list__shoppingCart').style.opacity = "0";
    document.querySelector('.list__shoppingCart').style.visibility = "hidden";
    document.querySelector('.list__shoppingCart').style.transition = "all .2s";

    document.querySelector('.list__liked').style.zIndex = "50";
    document.querySelector('.list__liked').style.opacity = "1";
    document.querySelector('.list__liked').style.visibility = "visible";
    document.querySelector('.list__liked').style.transition = "all .2s";
    document.querySelector('.list__liked').style.transitionDelay = ".3s";

};