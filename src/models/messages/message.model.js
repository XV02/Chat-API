const { ObjectId } = require('mongodb');
const BaseModel = require('../../core/baseModel');

class Message extends BaseModel{
    constructor(){
        super('messages');
    }

    createMessage(roomID, userID, message){
        return this.collection.insertOne({
            room: ObjectId(roomID), 
            user: ObjectId(userID), 
            message: message,
            sendedAt: new Date(),
        });
    }
}

module.exports = Message;