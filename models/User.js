const { Model, DataTypes, UUIDV4 } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config');
class User extends Model {}
User.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6]
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'user',
		hooks: {
			beforeCreate: async (user, options) => {
				console.log(options);
				console.log(user);
				const salt = await bcrypt.genSalt(10);
				const hashedPassword = await bcrypt.hash(user.password, salt);
				user.email = user.email.toLowerCase();
				user.password = hashedPassword;
				return user;
			},
			beforeUpdate: async (user, options) => {
				console.log(options);
				console.log(user.password);
				user.email = user.email.toLowerCase();
				return user;
			},
		},
		
	}
);
module.exports = User;