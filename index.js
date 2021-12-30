const express = require('express');
// const faker = require('faker');
const req = require('express/lib/request');
const app = express();
const port = process.env.PORT || 5400;


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.send("my server has started");
    res.render("home")
})

app.get("/home", (req, res) => {
    res.render("home")
})

app.get("/oregontrail", (req, res) => {
    res.render("oregontrail")
})

app.get("/oregontrail/bojack", (req, res) => {
    // const name = request.params['name'];
    res.render("bojack")
})

app.get("/oregontrail/bojack/continue", (req, res) => {
    // const name = request.params['name'];
    res.render("bojack-continue")
})

app.get("/oregontrail/patricia", (req, res) => {
    // const name = request.params['name'];
    res.render("patricia")
})

app.get("/oregontrail/patricia/continue", (req, res) => {
    // const name = request.params['name'];
    res.render("patricia-continue")
})


app.get("/oregontrail/django", (req, res) => {
    // const name = request.params['name'];
    res.render("django")
})

app.get("/oregontrail/django/continue", (req, res) => {
    // const name = request.params['name'];
    res.render("django-continue")
})



app.get("/spacetrail", (req, res) => {
    res.render("spacetrail")
})

app.get("/thematrix", (req, res) => {
    res.render("thematrix")
})

app.get("/thematrix/redpill", (req, res) => {
    res.render("redpill")
})

app.get("/truth", (req, res) => {
    res.render("truth")
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})