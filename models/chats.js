const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Chat = sequelize.define('chat', {
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    chat : {
        type : Sequelize.STRING,
        allowNull : false
    },
    userId: Sequelize.INTEGER
}
);

module.exports = Chat;