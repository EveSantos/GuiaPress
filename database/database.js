const Sequelize = require("sequelize");

// Conexão
const connection = new Sequelize('guiapress', 'root', 'Borys@02',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;