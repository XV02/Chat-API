const router = require('express').Router();
const controller = require('./sessions.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/', controller.delete);


module.exports = router;

