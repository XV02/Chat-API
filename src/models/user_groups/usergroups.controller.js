const UserGroupsController = {
    getAll: (req, res) => {
        res.send('Will get userGroups');
    },
    getOne: (req, res) => {
        res.send('Will get "' + req.params.id + '" userGroup');
    },
    create: (req, res) => {
        res.send('Will create userGroup');
    },
    update: (req, res) => {
        res.send('Will update userGroup');
    },
    delete: (req, res) => {
        res.send('Will delete userGroup');
    }
}

module.exports = UserGroupsController;