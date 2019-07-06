const express = require('express');
const app=express();
const apipizzaRouter=express.Router();

let Pizza = require('./pizza');

apipizzaRouter.route('/pizzas').get((req,resp)=>{
   Pizza.find((err,data)=>{
       if(err){
           resp.send("Failure");
       }
       resp.send(data);
       
   });
});


apipizzaRouter.route('/:pizzaId').get((req,resp)=>{

    let p_pizzaId=req.params.pizzaId;
    Pizza.find({pizzaId:p_pizzaId},(err,data)=>{
        if(err){
            resp.send("Fail to load data for:"+p_pizzaId);
        }
        resp.send(data);
    });
});

apipizzaRouter.route('/delete/:pizzaId').delete((req,resp)=>{
    let p_pizzaId=req.params.pizzaId;
    Pizza.findOneAndDelete({pizzaId:p_pizzaId},(err,data)=>{
        if(err){
            resp.send("Fail to delete data for:"+p_pizzaId);
        }
        resp.send(p_pizzaId+":removed");
    });
});


module.exports=apipizzaRouter;