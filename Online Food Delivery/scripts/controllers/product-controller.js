// Product controller = It is a glue btw view and model 
// controller -> i/o view layer
// data exchange between view and Model 

import productOperations from "../services/product-operations.js";


async function loadPizzas(){
   const pizza =await productOperations.loadProducts();
   console.log('Pizzas are ', pizza);
    const rowDiv = document.getElementById("loadData");
    let pizzalen = pizza.length ;

    for(let i = 0 ; i<pizzalen ; i++){
        const col = document.createElement('div');
        col.classList.add('col-4');
        col.innerHTML=`<div class="card" style="">
        <img src="${pizza[i].url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pizza[i].name}</h5>
          <p class="card-text">${pizza[i].desc}n</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;


      rowDiv.appendChild(col);
    }
}
 
loadPizzas();