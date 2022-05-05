const express = require("express");
const passport = require("passport");

const connect = require("./config/db");

const app = express();
app.use(express.json());

const {signup, signin} = require("./controllers/auth.controller")
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");

//------------------------------------------------------------------

const projectController = require("./controllers/project.controller");

//------------------------------------------------------------------

app.post("/signup", signup);
app.post("/sigin", signin);

app.use("/users", userController);
app.use("/products", productController);
app.use(passport.initialize());

//------------------------------------------------------------------

app.use("/project", projectController);

//------------------------------------------------------------------

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});


const start = async() => {
  try {
    await connect();
    // console.log(1);
    app.listen(2244, () =>{
        console.log("Listening on port 2244...");
    });
    
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = start;