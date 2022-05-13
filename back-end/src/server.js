const express = require("express");
const passport = require("passport");

const connect = require("./config/db");

const app = express();
app.use(express.json());

const {signup, signin} = require("./controllers/auth.controller")
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller")

app.post("/signup", signup);
app.post("/signin", signin);

app.use("/users", userController);
app.use("/products", productController);
app.use(passport.initialize());


app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});


const start = async() => {
    await connect();

    app.listen(2244, () =>{
        console.log("Listening on port 2244...");
    });
};

module.exports = start;