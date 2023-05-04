module.exports = (sequelize, Sequelize) => {
    const Doc = sequelize.define("doc", {
        Fname:{
        type: Sequelize.STRING
        },
        Lname: {
          type:Sequelize.STRING
        },
        Contact: {
            type:Sequelize.INTEGER
        },
        Email: {
            type:Sequelize.STRING
        },
        Gender: {
          type:Sequelize.ENUM('Male', 'Female')  
        },
        Experience: {
            type:Sequelize.INTEGER
        },
        PNCno: {
          type:Sequelize.STRING  
        },
        Longitude: {
            type: Sequelize.DECIMAL(15, 14)  
        },
        Latitude: {
            type: Sequelize.DECIMAL(15, 14)
        },
        Password: {
          type:Sequelize.STRING  
        },
        isEnabled: {
        type:Sequelize.BOOLEAN
        }
    });
    return Doc
}
