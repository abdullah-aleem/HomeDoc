const express = require('express');
const cors = require('cors');
//to set port
const PORT = process.env.PORT || 8080;

//starting app
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));


//parsing data
app.use(express.json());

//syncing databases
const db = require("./models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

require("./routes/doc.routes.js")(app);
require("./routes/user.routes.js")(app);
require("./routes/admin.routes.js")(app);

app.get('/', (req,res) => {
    res.send("ffff")
})

app.listen(PORT, () => {
    console.log(`Abdullah's server is running on port ${PORT}.`);
});