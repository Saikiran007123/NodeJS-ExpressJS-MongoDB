const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('<a href="/contact">Contact US</a>');
});

app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Us Page</h1>');
});

app.listen(3000,()=>{
    console.log("Hi");
});