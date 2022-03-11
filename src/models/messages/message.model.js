const BaseModel = require('../../core/baseModel');

class Message extends BaseModel{
    constructor(){
        super('messages');
    }
}

module.exports = Message;