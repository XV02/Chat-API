const Message = require("./message.model");

const MessagesController = {
    getAll: (req, res) => {
        res.send('Will get messages');
    },
    getOne: (req, res) => {
        res.send('Will get "' + req.params.id + '" message');
    },
    create: (req, res) => {
        const message = new Message();
        message.createMessage(
            req.body.room,
            req.decoded._id,
            req.body.message)
        .then(result => {
            res.send(result);
        });
    },
    update: (req, res) => {
        res.send('Will update message');
    },
    delete: (req, res) => {
        res.send('Will delete message');
    }
}

module.exports = MessagesController;