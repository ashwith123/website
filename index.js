const express=require("express")

const app=express();

let port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"ejs"));


app.listen(port,()=>{
    console.log("app is listening");
})