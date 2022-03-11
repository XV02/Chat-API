const RolesController = {
    getAll: (req, res) => {
        res.send('Will get roles');
    },
    getOne: (req, res) => {
        res.send('Will get "' + req.params.id + '" role');
    },
    create: (req, res) => {
        res.send('Will create role');
    },
    update: (req, res) => {
        res.send('Will update role');
    },
    delete: (req, res) => {
        res.send('Will delete role');
    }
}

module.exports = RolesController;