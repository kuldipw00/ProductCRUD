const express=require('express')
const { createProduct,updateProduct, readProduct, deleteProduct } = require('../controller/productController')
const router=express.Router()


router.post('/createProduct',createProduct)
router.put('/updateProduct',updateProduct)
router.get('/readProduct',readProduct)
router.delete('/deleteProduct/:prod_id',deleteProduct)


module.exports=router
