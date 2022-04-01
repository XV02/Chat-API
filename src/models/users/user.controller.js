const User = require('./user.model');
const jwt = require('jsonwebtoken');

const UsersController = {
   getAll: (_, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            res.send(result);
        });
    },
    create: (req, res) => {
        const user = new User();
        user.createUser(
            req.body.name,
            req.body.email,
            req.body.password,
            req.body.role)
        .then(result => {
            res.send(result);
        });
    },
    update: (req, res) => {
        res.send('Will update user');
    },
    delete: (req, res) => {
        res.send('Will delete user');
    },
    signIn: (req, res) => {
        const user = new User();
        user.signIn(
            req.body.name,
            req.body.password
        )
        .then(result => {
            if(result){
                const token = jwt.sign(result, process.env.KEY, {
                    expiresIn: '24h'
                });
                res.send({
                    token: token,
                });
            }
            else{
                res.status(404).send({
                    error: 'User or password incorrect',
                });
            }
        });
    },
}

module.exports = UsersController;