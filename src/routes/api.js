const router = require('express').Router();
const userRoutes = require('./../models/users/user.routes');
const roomRoutes = require('./../models/rooms/rooms.routes');
const messageRoutes = require('./../models/messages/messages.routes');

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);

module.exports = router;