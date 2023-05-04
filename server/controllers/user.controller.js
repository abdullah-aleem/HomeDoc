const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;




exports.signIn = (req, res) => {
    if (req.body.Password == undefined || req.body.Email == undefined) {
        res.status(500).send({
            message: "send empty password or email"
        });
        return;
    }
    User.findOne({
        where: {
            Password: req.body.Password,
            Email: req.body.Email
        }
    }).then(
        data => {

            if (data != null) {
                res.send(data)
                return;
            }
            res.send("hell")
        }
    )
};

exports.signUp = (req, res) => {
    let user = {
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        Contact: req.body.Contact,
        Email: req.body.Email,
        Password: req.body.Password,
        Gender:req.body.Gender,
        DOB: req.body.Dob,
        Longitude:req.body.Longitude,
        Latitude: req.body.Latitude
    }
    User.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.send({message:err})
    })
}