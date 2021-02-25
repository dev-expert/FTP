const express= require('express')

const ao= express();
ao.get('/',function(req,res)
{
    res.send("Hello World");
});
ao.get('/alien',function(req,res)
{
    res.send("Welcome back alien");
});

// Dynamic Url by paraam and id

ao.get('/alien/:id',function(req,res)
{
    const id= req.params.id
    res.send("Welcom Manoj "+ id)
});
ao.listen(8000,function(req,res)
{
    console.log("Running the server!!!!!");
});