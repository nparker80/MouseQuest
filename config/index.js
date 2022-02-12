require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,
		{
			host: 'localhost',
			dialect: 'mysql',
			port: 3306
		}
	);
	};

module.exports = {
	secret: "bezkoder-secret-key",
	user: "mousequest30@gmail.com", 
	pass: "mousequest1234", 
};

module.exports = sequelize;