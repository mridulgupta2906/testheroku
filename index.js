const express=require("express");
const app=express();

const bodyparser=require("body-parser");
const { urlencoded } = require("body-parser");
const route=require('./routes')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());


app.use('/',route);

app.listen(3000,()=>{
    console.log("Server started 3000");
})