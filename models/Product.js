const connection = require("../knexfile")['development'];// se puede cambiar 'development' es en desarrollo en el knexfile.js estan las otras rutas como staging o producccion
const database = require('knex')(connection);

const getAllProducts = () => {
    // consultado a todos los elementos dentro del la tabla clients
    // select * from clients
    return database('products');
};

const getProduct = (idProduct) => {
    // select * from clients where id = idClient
    return database('products')
        .where( { id: idProduct })
        .first(); // si no le pongo esto me devuelve un array

};

const insertProduct = (product) => {
    // insert into clients (first_name,...) values('Maria',...)
    return database('product')
        .insert(product);
};

const updateProduct = (idProduct, product) => {
    return database('product') 
        .where('id','=',idProduct)
        .update(product)
}

const deleteProduct = (idProduct) => {
    return database('product')
        .where('id','=',idProduct)
        .del()
}

module.exports = {
    getAllProducts,
    getProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}