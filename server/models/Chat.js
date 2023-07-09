const sequelize = require('../DB');
const { DataTypes } = require('sequelize');

const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'Гость'
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    timestamps: true,
    underscored: true
})

module.exports = Chat;