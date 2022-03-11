const router = require('express').Router();
const userRoutes = require('./../models/users/user.routes');
const roomRoutes = require('./../models/rooms/rooms.routes');

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);

module.exports = router;