
//4c36b4153f5d444bcb98e45c72014422
//https://www.food2fork.com/api/search
//https://www.food2fork.com/api/get

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import { elements, renderLoader, removeLoader, hideLikeList, showLikeList } from './views/base';
import * as recipeView from './views/recipeView';
import * as searchView from './views/searchView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';


/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {};
let show = false;

document.querySelector('.nav--shop__liked').addEventListener('click', ()=> {
    
    if(show == false) {

        showLikeList();

        show = true;

    } else if (show == true) {

        hideLikeList();
        
        show = false;
        
    }

    
    
});



/** For Search List */

const searchController = async () => {

    // 1) Get query from view
    const query = searchView.getQuery();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchLoader);

        try {

              // 4) Search for recipes
            await state.search.getResults();

            // 5) Render results on UI
            removeLoader();
            searchView.renderResults(state.search.result);

        } catch (err) {
            alert('Something wrong with the search...');
            removeLoader();
        }
      
    }

}

elements.searchField.addEventListener('submit', e => {
    e.preventDefault();
    searchController();
});

elements.searchPage.addEventListener('click', e => {

    const btn = e.target.closest('.list__button');

    if (btn) {

        const targetPage = parseInt(btn.dataset.goto, 10);

        searchView.clearResults();
        searchView.renderResults(state.search.result, targetPage);

        console.log(targetPage);

    }
    

});


/** For Displaying Selected Recipe */

const recipeController = async () => {

    // Obtain recipe ID
    const id = window.location.hash.replace('#', '');

    if (id) {

        // 1. Prepare UI for result

            recipeView.clearRecipe();
            renderLoader(elements.recipeContent);

        // 2. Highlight selected recipe from the search list

            // if (state.search) searchView.highlightRecipe(id);

        // 3. Create new recipe object

            state.recipe = new Recipe (id);
            
            try {

                await state.recipe.getRecipe();
                state.recipe.parseIngredients();
                removeLoader();
                recipeView.renderRecipe(state.recipe);
            } catch (error) {

                console.log(error);
                alert("Failed :(");

            }


    }


};


['hashchange'].forEach(event => window.addEventListener(event, recipeController));



const listController = () => {

    // Prepare for UI

    if(show == true) {

        hideLikeList();

    }

    listView.removeMessage();
    listView.clearList();
    renderLoader(elements.shopList);

    // Render list
    state.shopList = new List ();

    state.recipe.ingredients.forEach(el => {
        state.shopList.addItem(el.count, el.unit, el.ingredient);
    });

    removeLoader();

    state.shopList.items.forEach(el => {

        listView.renderItem(el);

    });

};


elements.shopList.addEventListener('click', e => {
    const id = e.target.closest('.list__shoppingCart__item').dataset.itemid;

    // Handle the delete button
    if (e.target.matches('.list__shoppingCart__item__button, .list__shoppingCart__item__button *')) {
        // Delete from state
        state.shopList.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);

    // Handle the count update
    } else if (e.target.matches('.list__shoppingCart__item__input')) {
        const val = parseFloat(e.target.value, 10);
        state.shopList.updateCount(id, val);
    }
});



const likeController = () => {

    if(!state.likes) {

        state.likes = new Likes();

    }

    const ID = state.recipe.id;

    if(!state.likes.isLiked(ID)) {

        const newLike = state.likes.addLike(state.recipe.id, state.recipe.title, state.recipe.author, state.recipe.img);
        console.log(newLike);
        likesView.renderLike(newLike);


    } else if (state.likes.isLiked(ID)) {

        state.likes.deleteLike(ID);

        likesView.removeLike(ID);

    }


};




elements.recipeContent.addEventListener('click', e => {

    if (e.target.matches('.list__content__add, .list__content__add *')) {

        listController();

    } else if (e.target.matches('.list__content__servings__button, .list__content__servings__button *')) {

        likeController();
        console.log(state.likes.likes);

    }

});