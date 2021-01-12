
const product=require('../model/product')
exports.createProduct=(req,res)=>{

    const name=req.body.name
    const price=req.body.price
    const prod=new product()
    prod.name=name
    prod.price=price

    prod.save((err,data)=>{
        if(!err){
            res.status(200).json({"message":"Product Created"})
            
        }
    })
}

exports.updateProduct=(req,res)=>{

product.update({name:req.body.name},{price:req.body.price},(err,result)=>{
    if(!err){
        res.json({"message":"Updated"})
    }
})

}

exports.readProduct=(req,res)=>{

   product.find((err,data)=>{
    res.status(200).json({data})
   })

    
    
}

exports.deleteProduct=(req,res)=>{
    console.log(req.body)
    product.findOneAndDelete({_id:req.params.prod_id},(err,result)=>{
        if(!err)
            res.json({"message":"Deleted"})
    })
}