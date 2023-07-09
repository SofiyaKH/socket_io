const sequelize = require('../DB');

const Chat = require('./Chat');
const Room = require('./Room');

Room.hasOne(Chat);
Chat.belongsTo(Room);

const init = async () => {
    await sequelize.sync({
        alter: false,
        force: false
    });
}

module.exports = { init, Chat, Room };