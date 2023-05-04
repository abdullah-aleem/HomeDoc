module.exports = app => {
    const doc = require("../controllers/doc.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
   // router.post("/", doc.create);

    // Retrieve all Tutorials
    router.post("/signup", doc.signUp);
    router.post("/signin",doc.signIn)

    app.use('/doc', router);    
};