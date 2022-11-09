const { Router } = require('express');
const router = Router();
const { Product } = require('../db');
const products = require("../../../productos.json");


router.get("/", async (req, res) => {

    try{
      const allProducts= await Product.findAll();

      if(!allProducts.length){
        const productos= products.productos.map((p) => {
            return {
                nombre: p.nombre,
                descripcion: p.descripcion,
                precio: p.precio,
                imagen: p.imagen,
                stock: p.stock
            }
        });
        
        const createProduct= await Product.bulkCreate(productos);
        const creados = await Product.findAll();
        res.status(201).send(creados);
      }else{
        res.status(200).send(allProducts);
      }
    }catch(error){
        res.status(400).send({error: error.message});
    }
})



module.exports = router;