module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    
    router.post("/signup", user.signUp);
    router.post("/signin", user.signIn)

    app.use('/user', router);
};