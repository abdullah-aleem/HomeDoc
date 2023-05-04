module.exports = app => {
    const admin = require("../controllers/admin.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    // router.post("/", doc.create);

    // Retrieve all Tutorials
    router.get("/requests", admin.request);
    router.post("/signin", admin.signIn)
    router.post("/update", admin.update)

    app.use('/admin', router);
};