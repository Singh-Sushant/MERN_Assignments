//Contains the logic for fetching , adding , sorting , searching , deletion , updation 

/*
It talks to network layer to Bring the JSON , and convert JSON into Objects and vice-versa 
*/

import Product from "../models/product.js";
import makeNetworkCall from "./api-client.js";

// since there will be many fucns therfore we make an obj of functions 

const productOperations = {                       
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray= pizzas['Vegetarian'];

        const productsArray = pizzaArray.map(pizza => {
            const currpizza = new Product(pizza.id , pizza.name , pizza.menu_description , pizza.price , pizza.assets.product_details_page[0].url);
            return currpizza;
        });
        // console.log('Product array ' , productsArray);
        return productsArray;
    },

    anotherfunction(){
         
    }
}

export default productOperations;