const ProductModel = require('../models/Product');

const getProducts = (req, res) =>  {
    ProductModel
        .getAllProducts()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getProduct = (req, res) => {
    const { id } = req.params
    //quiero validar que si no existe el cliente me lo diga en un mensaje?
    ProductModel
        .getProduct(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));

};

const insertProduct = (req, res) => {
    const { SKU, name_product, description, active} = req.body

    if(SKU !== '' && name_product !== ''){
        ProductModel
            .insertProduct({ SKU, name_product, description, active })
            .then(results => res.status(201).json({message: 'Producto agregado exitosamente'}))
            .catch(error => res.status(500).json(error));
    }else{ 
        res.status(400).send({message:'Producto Invalido'})
        }
}


const updateProduct = (req, res) => {
    const { id } = req.params
    const { SKU, name_product, description, active } = req.body
    if(SKU !== '' && name_product !== ''){
    ProductModel
        .updateProduct(id,{ SKU, name_product, description, active})
        .then(results => res.status(201).json({message: 'Producto Actualizado correctamente'}))
        .catch(error => res.status(500).json(error));
    }else{
        res.status(400).send('Producto Invalido')
    }

}

const deleteProduct = (req,res) => {
    const { id } = req.params

    ProductModel
        .deleteProduct(id)
        .then(results => res.status(201).json({message: 'Eliminado exitosamente'}))
        .catch(error => res.status(500).json(error));
        //preguntar porque le id no se reinicia? en postgress lelva el conteo
}

const insertProducts = (req, res) =>  res.status(200).send({
    message:"Clients"
});




module.exports = {
    getProducts,
    getProduct,
    insertProducts,
    insertProduct,
    updateProduct,
    deleteProduct
};