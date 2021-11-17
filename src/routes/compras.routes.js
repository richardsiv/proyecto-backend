const { Router } = require('express');
const { crearCompra, obtenerCompras } = require('../controllers/comprasController');
const { requireAuth } = require('../middlewares/auth');
const router = Router();

router.post( '/crear/compra', crearCompra );
router.get( '/compras', requireAuth, obtenerCompras );

module.exports = router;