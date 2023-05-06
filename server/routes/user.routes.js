module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();


    router.post("/signup", user.signUp);
    router.post("/signin", user.signIn);
    router.post("/getpara",user.getPara)

    app.use('/user', router);
};