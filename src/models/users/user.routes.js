const router = require('express').Router();
const controller = require('./user.controller');

/**
 * @swagger
 *  /api/users:
 *      get:
 *          description: Get All users
 *          responses:
 *              200: 
 *                  description: Array with a list of users
 *          tags:
 *              - Users
 */
router.get('/', controller.getAll);

/**
 * @swagger
 *  /api/users/{id}:
 *      get:
 *          parameters:
 *           - in: path
 *             name: id
 *             required: true
 *             description: The user ID  
 *          description: Get one user using his Id
 *          responses:
 *              200: 
 *                  description: Information of the user
 *          tags:
 *              - Users
 */
router.get('/:id', controller.getOne);

/**
 * @swagger
 *  /api/users:
 *      post:
 *          description: Creates a new User
 *          responses:
 *              200: 
 *                  description: Verification that went correctly
 *          tags:
 *              - Users
 */
router.post('/', controller.create);


/**
 * @swagger
 *  /api/users/signIn:
 *      post:
 *          parameters:
 *           - in: body
 *             name: user
 *             required: true
 *             description: The user's name
 *             schema: 
 *              type: object
 *              required:
 *               - name
 *               - password
 *              properties:
 *               name: 
 *                type: string
 *               password:
 *                type: string
 *          description: Sign In with an existent user
 *          responses:
 *              200: 
 *                  description: Returns token
 *          tags:
 *              - Users
 */
router.post('/signIn', controller.signIn);

module.exports = router;