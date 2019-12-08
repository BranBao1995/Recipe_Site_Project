import axios from 'axios';
import { elements , key, proxy } from '../views/base';

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getResults() {

    
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
    
            console.log(error);
            alert('something went wrong :(');
    
        }
        
    
    };

};