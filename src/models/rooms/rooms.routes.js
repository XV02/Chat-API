const router = require('express').Router();
const controller = require('./rooms.controller');
const authRoute = require('./../../routes/authentication');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

router.post('/', authRoute, controller.create);
router.put('/', controller.update);
router.delete('/', controller.delete);

router.post('/invitation', authRoute, controller.invite);
router.post('/invitation/:id', authRoute, controller.acceptInvitation);


module.exports = router;

