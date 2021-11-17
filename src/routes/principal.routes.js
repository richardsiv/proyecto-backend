const { Router } = require('express');
const { paginaPrincipal, comprarPrincipal } = require('../controllers/principalController');
const router = Router();

router.get( '/', paginaPrincipal );
router.get( '/comprar', comprarPrincipal );

module.exports = router;