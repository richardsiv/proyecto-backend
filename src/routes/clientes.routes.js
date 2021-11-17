const { Router } = require('express');
const { crearCliente, obtenerClientes, obtenerClientePorId, eliminarCliente, obtenerYActualizarClientePorId, actualizarCliente } = require('../controllers/clientesController');
const { requireAuth } = require('../middlewares/auth');
const router = Router();

router.post( '/crear/cliente', requireAuth, crearCliente );
router.get( '/clientes', requireAuth, obtenerClientes );
router.get( '/cliente/:id', requireAuth, obtenerClientePorId );
router.post( '/actualizar/cliente/:id', requireAuth, actualizarCliente );
router.get( '/actualizar/cliente/:id', requireAuth, obtenerYActualizarClientePorId );
router.get( '/eliminar/cliente/:id', requireAuth, eliminarCliente );

module.exports = router;