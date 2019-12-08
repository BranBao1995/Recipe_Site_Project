import { elements } from './base';
import {recipeTitleLength } from './searchView';

export const renderLike = (newLike) => {

    const markup = `
        <li class="list__liked__element">
            <a href="#${newLike.id}" class="list__liked__item">

                <figure class="list__liked__item__thumbnail">
                    <img src="${newLike.img}" alt="${newLike.title}" class="list__liked__item__image">
                </figure>
                <div class="list__liked__item__info">
                    <h2 class="list__liked__item__heading header--likedItem">
                        ${recipeTitleLength(newLike.title)}
                    </h2>
                    <p class="list__liked__item__text text--likedItem">
                        ${newLike.author}
                    </p>
                </div>

            </a>
        </li>
    `; 

    elements.likeList.insertAdjacentHTML('beforeend', markup);


};

export const removeLike = (id) => {

    const child = document.querySelector(`.list__liked__item[href*="${id}"]`).parentElement;

    if(child) {
        child.parentElement.removeChild(child);
    }

};