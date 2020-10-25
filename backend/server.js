const express=require('express');
const data=require('./data');
const app=express();
app.get("/api/products/:id",(req,res)=>{
    const productId=req.params.id;
    const product=data.products.find(x=>x._id===productId);
    if(product)
        res.send(product);
    else
        res.status(400).send({msg: "Product not found"})

});

app.listen(5000, ()=>{console.log("Server started at http://localhost:5000")});
