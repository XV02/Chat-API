const router = require('express').Router();
const controller = require('./messages.controller');
const authRoute = require('./../../routes/authentication');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

/**
 * @swagger
 *  /api/messages:
 *      post:
 *          parameters:
 *           - in: body
 *             name: message
 *             required: true
 *             description: The message's information
 *             schema: 
 *              type: object
 *              required:
 *               - room
 *               - message
 *              properties:
 *               room: 
 *                type: string
 *               message:
 *                type: string
 *           - in: header
 *             name: authorization
 *             schema:
 *              type: string
 *              format: string
 *             required: true
 *          description: Creates a new message in a group
 *          responses:
 *              200: 
 *                  description: Message send
 *          tags:
 *              - Message
 */
router.post('/', authRoute, controller.create);

router.put('/', controller.update);
router.delete('/', controller.delete);


module.exports = router;

