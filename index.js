const express=require("express")
const path = require("path"); 

const app=express();

let port=8080;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let post=[{username:"ashwith",
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
    res.render("index.ejs",{post});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.get("/",(req,res)=>{
    res.send("server is working");
})

app.listen(port,()=>{
    console.log("app is listening");
})