const req = require('express/lib/request');
const { ObjectId } = require('mongodb');
const BaseModel = require('../../core/baseModel');
const Database = require('./../../core/database');

class Room extends BaseModel{
    invitations;
    constructor(){
        super('rooms');
        this.invitations = Database.selectCollection('invitation');
    }

    createRoom(name, creator) {
        return this.collection.insertOne({
            name: name, 
            creator: ObjectId(creator),
        });
    }

    createInvitationLink(room, userID) {
        return this.getOne(room).then(res => {
            if(res.creator != userID){
                return Promise.reject("You're not the owner");
            }
            return this.invitations.insertOne({
                createdAt: new Date(),
                room: room,
            });
        });
    }
}

module.exports = Room;