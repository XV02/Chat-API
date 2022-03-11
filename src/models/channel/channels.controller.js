const ChannelsController = {
    getAll: (req, res) => {
        res.send('will get channels');
    },
    getOne: (req, res) => {
        res.send('Will get "' + req.params.id + '" channel');
    },
    create: (req, res) => {
        res.send('Will create channel');
    },
    update: (req, res) => {
        res.send('Will update channel');
    },
    delete: (req, res) => {
        res.send('Will delete channel');
    }
}

module.exports = ChannelsController;