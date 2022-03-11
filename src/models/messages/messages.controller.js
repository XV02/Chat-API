const MessagesController = {
    getAll: (req, res) => {
        res.send('Will get messages');
    },
    getOne: (req, res) => {
        res.send('Will get "' + req.params.id + '" message');
    },
    create: (req, res) => {
        res.send('Will create message');
    },
    update: (req, res) => {
        res.send('Will update message');
    },
    delete: (req, res) => {
        res.send('Will delete message');
    }
}

module.exports = MessagesController;