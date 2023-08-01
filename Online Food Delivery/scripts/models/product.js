// Product .js contains the structure of a pizza object 
// Pizza object -> ID , Name , Desc , Price , Rating 


class Product{
    constructor(id , name , desc , price , url){

        this.id = id ;
        this.name = name ;
        this.desc = desc ;
        this.price = price ;
        this.url = url ;
    }
}
export default Product;