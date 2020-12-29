const express=require("express");
const app=express();

const bodyparser=require("body-parser");
const { urlencoded } = require("body-parser");
const route=require('./routes')
const port=process.env.PORT||3000;

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());


app.use('/',route);

app.listen(port,()=>{
    console.log("Server started ",port);
})