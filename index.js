const express = require('express');
const req = require('express/lib/request');
const session = require('express-session');
//creates instance of an express application 
const app = express();
///////////ADD express sessions middle ware here//////////////
app.use(
    session({
        secret: "random string",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

//parser logic
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//declaring a port, can be any number, need process.env.PORT for deployment
const port = process.env.PORT || 5400;


///////////ROUTES/////////////////////////////////
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // const session_username = req.session ? req.session.username : "user not set";
    // res.render("index", {my_user: session_username});
    let user = "";
    let punctuation = "";
    let invalid_login = "";

    invalid_login = req.query.reason || null;

    if ( req.session && req.session.username){
        user = req.session.username;
        punctuation = ",";
    }
    res.render("index", {my_user: user, punctuation: punctuation, invalid_login: invalid_login})
})

app.post("/signup", (req, res) => {
    const valid_users = [
        {"name": "jabair", "password": "jabair"}
    ]
    const user = req.body.username;
    const pass = req.body.password;

    const found_user = valid_users.find(usr => {
        return usr.name == user && usr.password == pass;
    });

    if (found_user) {
        req.session.username = user;
        res.redirect("/home")
    } else {
        req.session.destroy(() => {
            console.log("user-reset")
        })
        res.redirect("/?reason=invalid_user")
    }
    
    
})

app.get("/home", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("home", {my_user: user, punctuation: punctuation});
    } else{
        res.redirect("/");
    }
    

});



app.get("/oregontrail", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("oregontrail", {my_user: user});
    } else{
        res.redirect("/");
    }
    // res.render("oregontrail")
})

app.get("/oregontrail/bojack", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("bojack", {my_user: user});
    } else{
        res.redirect("/");
    }
    // res.render("bojack")
})

app.get("/oregontrail/bojack/continue", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("bojack-continue", {my_user: user});
    } else{
        res.redirect("/");
    }
    
    // res.render("bojack-continue")
})

app.get("/oregontrail/patricia", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("patricia", {my_user: user});
    } else{
        res.redirect("/");
    }
    
    // res.render("patricia")
})

app.get("/oregontrail/patricia/continue", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("patricia-continue", {my_user: user});
    } else{
        res.redirect("/");
    }
    
    // res.render("patricia-continue")
})


app.get("/oregontrail/django", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("django", {my_user: user});
    } else{
        res.redirect("/");
    }
    
    // res.render("django")
})

app.get("/oregontrail/django/continue", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("django-continue", {my_user: user});
    } else{
        res.redirect("/");
    }
    
    // res.render("django-continue")
})



app.get("/spacetrail", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("spacetrail", {my_user: user});
    } else{
        res.redirect("/");
    }
    // res.render("spacetrail")
})

app.get("/thematrix", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("thematrix", {my_user: user});
    } else{
        res.redirect("/");
    }
    // res.render("thematrix")
})

app.get("/thematrix/redpill", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("redpill", {my_user: user});
    } else{
        res.redirect("/");
    }
    // res.render("redpill")
})

app.get("/truth", (req, res) => {
    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
        res.render("truth", {my_user: user});
    } else{
        res.redirect("/");
    }
    // res.render("truth")
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})