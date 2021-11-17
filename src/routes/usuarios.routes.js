const { Router } = require('express');
const { register, getRegister, getLogin, login, logout } = require('../controllers/usuariosController');
const router = Router();

router.post( '/register', register );
router.get('/register', getRegister);
router.post( '/login', login );
router.get( '/login', getLogin );
router.get('/logout', logout );


module.exports = router;