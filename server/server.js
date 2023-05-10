const express = require('express');
const { createServer } = require("http");
const cors = require('cors');
const { Server } = require("socket.io");

//to set port
const PORT = process.env.PORT || 8080;

//starting app
const app = express();

//io initialization

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

//sockets to implement main functionality of the app 
app.get('/', (req, res) => {
    res.send("ffff")
})
const httpServer = createServer(app);
const io = new Server(httpServer);
io.on("connection", (socket) => {
    console.log(socket);
    socket.on("giveIdDoc", data => {
        socket.data.id = data.id;
    })
    socket.on("giveIdUser", data => {
        socket.data.id = data.phone;
    })
    socket.on("sendRequest", data => {
        //send request to all the doctors 
        let clients = io.of('/doc').clients();
        clients.foreach(x => {
            if (x.data.id == data.reqId) {
               x.emit('recieveOffer', data);
                
            }
            return x
        })
    })
    socket.on("requestAccepted", data => {
        let docs = io.of('/doc').clients();       
        let users = io.of('/uesr').clients();     
        docs.forEach(x => {
            if (x.data.id == data.docId) {
                x.join(data.pnc);
               
            }
        })
        users.forEach(x => {
            if (x.data.id == data.userId) {
                x.join(data.pnc);

            }
        })
    })
    
});
// app.listen(PORT, () => {
//     console.log(`Abdullah's server is running on port ${PORT}.`);
// });
httpServer.listen(PORT);