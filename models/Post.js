const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Post extends Model {};

Post.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        userid: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username'
            }
        },
        helmet: {
            type: DataTypes.STRING,
            maxLength: 15,
            allowNull: false,
        },
        armor: {
            type: DataTypes.STRING,
            maxLength: 15,
            allowNull: false,
        },
        weapon: {
            type: DataTypes.STRING,
            maxLength: 15,
            allowNull: false,
        },
        cape: {
            type: DataTypes.STRING,
            maxLength: 15,
            allowNull: false,
        },
        about: {
            type: DataTypes.STRING,
            maxLength: 40,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        modelName: 'Post',
    }
);

module.exports = Post;