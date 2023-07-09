const sequelize = require('../DB');
const { DataTypes } = require('sequelize');

const Room = sequelize.define('Room', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: true,
    underscored: true
})

module.exports = Room;