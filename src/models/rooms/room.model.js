const req = require("express/lib/request");
const { ObjectId } = require("mongodb");
const BaseModel = require("../../core/baseModel");
const Database = require("./../../core/database");

class Room extends BaseModel {
  invitations;
  constructor() {
    super("rooms");
    this.invitations = Database.selectCollection("invitation");
  }

  createRoom(name, creator) {
    return this.collection.insertOne({
      name: name,
      creator: ObjectId(creator),
      participants: [ObjectId(creator)],
    });
  }

  createInvitationLink(room, userID) {
    return this.getOne(room).then((res) => {
      if (res.creator != userID) {
        return Promise.reject("You're not the owner");
      }
      return this.invitations.insertOne({
        createdAt: new Date(),
        room: room,
      });
    });
  }

  acceptInvitation(invitationID, userID) {
    return this.invitations
      .findOne({
        _id: ObjectId(invitationID),
      })
      .then((result) => {
        if (!result) throw "";
        return result.room;
      })
      .then((roomID) => Promise.all([
        this.collection.findOne({
          _id: ObjectId(roomID),
          participants: { $in: [ObjectId(userID)] },
        }),
        Promise.resolve(roomID),
      ]))
      .then(([result, roomID]) => {
          console.log(result);
        if (result) {
          throw "You are already in the group";
        }
        return this.collection.updateOne(
          { _id: ObjectId(roomID) },
          { $push: { participants: ObjectId(userID) } }
        );
      });
  }
}

module.exports = Room;
