const { Chat, Room } = require('../models/init');

class ChatService {
    async getRooms() {
        try {
            return await Room.findAll({});
        } catch (e) {
            throw e;
        }
    }

    async createRoom(name) {
        try {
            const room = await Room.create({name});
            return room;
        } catch (e) {
            throw e;
        }
    }

    async getMessages(room_id = null) {
        try {
            const filter = {};
            if (room_id) {
                filter.room_id = room_id;
            } else {
                filter.room_id = null;
            }

            const messages = Chat.findAll({
                where: filter,
                order: [['created_at', 'DESC']]
            });

            return messages;
        } catch (e) {
            throw e;
        }
    }

    async saveMessage(data) {
        try {
            const message = await Chat.create(data);
            return message;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = ChatService;
