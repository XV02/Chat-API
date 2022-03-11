const SessionsController = {
    getAll: (req, res) => {
        res.send('Will get sessions');
    },
    getOne: (req, res) => {
        res.send('Will get "' + req.params.id + '" session');
    },
    create: (req, res) => {
        res.send('Will create session');
    },
    update: (req, res) => {
        res.send('Will update session');
    },
    delete: (req, res) => {
        res.send('Will delete session');
    }
}

module.exports = SessionsController;