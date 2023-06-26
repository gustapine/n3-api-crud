const router = require('express').Router()
const authController = require('../controllers/authController.js');

// Rota de login
router.post('/login', authController.login);

module.exports = router;
