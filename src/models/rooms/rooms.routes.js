const router = require('express').Router();
const controller = require('./rooms.controller');
const authRoute = require('./../../routes/authentication');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

/**
 * @swagger
 *  /api/rooms:
 *      post:
 *          parameters:
 *           - in: body
 *             name: room
 *             required: true
 *             description: The room name
 *             schema: 
 *              type: object
 *              required:
 *               - name
 *              properties:
 *               name: 
 *                type: string
 *           - in: header
 *             name: authorization
 *             schema:
 *              type: string
 *              format: string
 *             required: true
 *          description: Creates a new room
 *          responses:
 *              200: 
 *                  description: Returns created room
 *          tags:
 *              - Rooms
 */
router.post('/', authRoute, controller.create);

router.put('/', controller.update);
router.delete('/', controller.delete);

/**
 * @swagger
 *  /api/rooms/invitation:
 *      post:
 *          parameters:
 *           - in: body
 *             name: room
 *             required: true
 *             description: The room ID
 *             schema: 
 *              type: object
 *              required:
 *               - room
 *              properties:
 *               room: 
 *                type: string
 *           - in: header
 *             name: authorization
 *             schema:
 *              type: string
 *              format: string
 *             required: true
 *          description: Creates an invitation link if you're the owner
 *          responses:
 *              200: 
 *                  description: Returns invitation link
 *              401:
 *                  decription: Not permitted
 *          tags:
 *              - Rooms
 */
router.post('/invitation', authRoute, controller.invite);

/**
 * @swagger
 *  /api/rooms/invitation/{id}:
 *      post:
 *          parameters:
 *           - in: path
 *             name: id
 *             required: true
 *             description: The invitation ID  
 *           - in: header
 *             name: authorization
 *             schema:
 *              type: string
 *              format: string
 *             required: true
 *          description: Link that is used to join a Group
 *          responses:
 *              200: 
 *                  description: Returns accepted
 *              401:
 *                  decription: Not permitted
 *          tags:
 *              - Rooms
 */
router.post('/invitation/:id', authRoute, controller.acceptInvitation);


module.exports = router;

