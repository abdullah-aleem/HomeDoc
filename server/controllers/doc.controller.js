const db = require("../models");
const Doc = db.doc;
const Op = db.Sequelize.Op;



// Retrieve all Doctors from the database.
exports.signUp = (req, res) => {
    if (req.body.Fname == undefined) {
        res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        })
        return;
    }
    let doc = {
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        Contact: req.body.Contact,
        Email: req.body.Email,
        Gender: req.body.Gender,
        Experience:req.body.Experience,
        PNCno: req.body.Pnc,
        Longitude:req.body.Longitude,
        Latitude:req.body.Latitude,
        Password: req.body.Password,
        isEnabled:false,
    }
    Doc.create(doc).then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
        });
})
   
};

exports.signIn = (req, res) => {
   
    if (req.body.Password == undefined || req.body.Email == undefined) {
        res.status(500).send({
            message: "send empty password or email"
        });
        return;
    }
     Doc.findOne({
        where: {
            Password: req.body.Password,
            Email:req.body.Email
       }
   }).then(
       data => {
           
           if (data != null) {
               res.send(data)
           }
           res.send("hell")
       }    
   )
}
