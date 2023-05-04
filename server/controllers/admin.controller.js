const db = require("../models");
const doc = db.doc;
const Op = db.Sequelize.Op;


exports.signIn = (req, res) => {
    if (req.body.Password == undefined || req.body.Email == undefined) {
        res.status(500).send({
            message: "send empty password or email"
        });
        return;
    }
    else if (req.body.Password == "admin@123" || req.body.Email == "admin") {
        res.send("in");
        
    }
    else {
        res.send("wrong password");
    }
};

exports.request = (req, res) => {
    doc.findAll({
        where: {
            isEnabled:false,
        }
    }).then(data => {
            res.send(data)
    }).catch(err => {
        res.status(500).send(
            {
                    message:err
                }
            )
        })
}
exports.update = (req, res) => {
    if (req.body.Pnc == undefined) {
        res.send({
            message:"undefined body"
        })
        return
   }
    doc.findOne({
        where: {
        PNCno:req.body.Pnc
        }
    }).then(data => {
        
        doc.update({
            Fname: data.Fname,
            Lname: data.Lname,
            Contact: data.Contact,
            Email: data.Email,
            Gender:data.Gender,
            Experience:data.Experience,
            PNCno:data.PNCno,
            Longitude:data.Longitude,
            Latitude:data.Latitude,
            Password:data.Password,
            isEnabled:true
        }, {where: {
            PNCno:req.body.Pnc
        }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update doc with id=${req.body.Pnc}.`
                });
            }
        }).catch(err=>{res.send(err)})
    }).catch(err => {
        res.status(500).send({
            message:err
        })
    })
}