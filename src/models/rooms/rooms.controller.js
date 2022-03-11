const Room = require("./room.model");

const RoomsController = {
    getAll: (req, res) => {
        const user = new Room();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new Room();
        user.getOne(req.params.id).then(result => {
            res.send(result);
        });
    },
    create: (req, res) => {
        const room = new Room();
        room.createRoom(
            req.body.name,
            req.decoded._id)
        .then(result => {
            res.send(result);
        });
    },
    update: (req, res) => {
        res.send('Will update room');
    },
    delete: (req, res) => {
        res.send('Will delete room');
    },
    invite: (req, res) => {
        const room = new Room();
        room.createInvitationLink(
            req.body.room, 
            req.decoded._id)
        .then(result => {
            res.send({
                "link": "localhost:3000/api/rooms/invitation/" + result.insertedId,
            });
        })
        .catch(err =>{
            res.status(401).send(err);
        });
    },
    acceptInvitation: (req, res) => {
        const room = new Room();
        room.acceptInvitation(
            req.params.id,
            req.decoded._id)
        .then(result => {
            res.send(result);
        })
        .catch(err =>{
            res.status(400).send(err);
        });
    }
}

module.exports = RoomsController;