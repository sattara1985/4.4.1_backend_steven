const express = require('express');
const router = express.Router();

// router.get('/', (req, res) =>  res.status(200).send({
//     message:"Product"
// }));

//const ClientController = require('./../controllers/ClientController');
const { ProductController } = require('./../controllers');
//desestructuracion

//obtenemos todos los clientes
router.get('/', ProductController .getProducts);

//insertamos un solo cliente
router.post('/', ProductController .insertProduct);

// Actualizamos un cliente
router.put('/:id', ProductController.updateProduct)
// pramateros son los que encontramos en la ruta
/// http://localhost:3000/api/v1/clients/2 
// body es el cuerpo de la peticion y no apararece en la ruta
// los queries apararecen en la ruta empezando por un ? 
// sepradados por &  
// http://localhost:3000/api/v1/clients/?first_name=juan
// Eliminar un cliente
router.delete('/:id',ProductController.deleteProduct)

// Obtener un solo cliente
router.get('/:id',ProductController.getProduct)


module.exports = router;