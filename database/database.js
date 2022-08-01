const Sequelize = require("sequelize");

// Conexão
const connection = new Sequelize('guiapress', 'root', 'Borys@02',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;