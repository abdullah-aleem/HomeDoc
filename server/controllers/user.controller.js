const db = require("../models");
const User = db.user;
const Doc = db.doc;
const Op = db.Sequelize.Op;




exports.signIn = (req, res) => {
    if (req.body.Password == undefined || req.body.Email == undefined) {
        console.log(req)
        res.status(500).send({
            "message": "send empty password or email"
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
                res.send({"message":"user is there"})
                return;
            }
            res.send({"message":"hello"})
        }
    )
};

exports.signUp = (req, res) => {
    console.log(req.body);
    let user = {
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        Contact: req.body.Contact,
        Email: req.body.Email,
        Password: req.body.Password,
        Gender:req.body.Gender,
        DOB: req.body.DOB,
        Longitude:req.body.Longitude,
        Latitude: req.body.Latitude
    }
    console.log(user);
   let x= User.create(user).then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.send({message:err})
    })
    console.log(x);
}
exports.getPara = (req, res) => {
    Doc.findAll({
        where: {
            Latitude: {
                [Op.lt]: req.body.Latitude+0.08
            },
            Longitude: {
                [Op.lt]: req.body.Longitude + 0.08
            },
            Latitude: {
                [Op.gt]: req.body.Latitude - 0.08
            },
            Longitude: {
                [Op.gt]: req.body.Longitude - 0.08
            }
        }
    }).then(data => {
        res.send(data);
})
}