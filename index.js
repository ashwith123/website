const express=require("express")

const app=express();

let port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"ejs"));
app.set(express.static(path.join(__dirname,"public")));

let post=[{usernme:"ashwith",
        content:"i am ashwith"  
        },
        {usernme:"saitama",
        content :"i am hero for fun"  
        },
        {usernme:"anya",
        content:"i am anay"  
        },
];


app.listen(port,()=>{
    console.log("app is listening");
})