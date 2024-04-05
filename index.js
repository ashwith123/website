const express=require("express");
const bodyParser = require('body-parser');

const path = require("path"); 

const app=express();

let port=8080;
/*all path are set using below three lines   */
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[{username:"ashwith",
        content:"i am ashwith"  
        },
        {username:"saitama",
        content :"i am hero for fun"  
        },
        {username:"anya",
        content:"i am anay"  
        },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

/* rendering in new post */
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

/* this is addding data to array */

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");
})


app.get("/",(req,res)=>{
    res.send("server is working");
})

app.listen(port,()=>{
    console.log("app is listening");
})