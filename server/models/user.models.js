module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        Fname: {
            type: Sequelize.STRING
        },
        Lname: {
            type: Sequelize.STRING
        },
        Contact: {
            type: Sequelize.INTEGER
        },
        Email: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.INTEGER
        },
        Gender: {
            type: Sequelize.ENUM('Male', 'Female')
        },
            DOB:{
            type:Sequelize.DATEONLY
        },
        Longitude: {
            type: Sequelize.DECIMAL(15, 14)
        },
        Latitude: {
            type: Sequelize.DECIMAL(15, 14)
        }
    });
    return User
}
