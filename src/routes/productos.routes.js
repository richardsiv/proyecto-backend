const { Router } = require('express');
const multer  = require('multer');
const { crearProducto, obtenerProductos, obtenerProductoPorId, eliminarProducto, actualizarProducto, obtenerYActualizarProductoPorId } = require('../controllers/productosController');
const { requireAuth, checkUser } = require('../middlewares/auth');
const router = Router();

const storage = multer.diskStorage({
    destination: './src/public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})
 
const upload = multer({ storage: storage })

router.post( '/crear/producto', checkUser, requireAuth, upload.single('file'), crearProducto );
router.get( '/productos', requireAuth, obtenerProductos );
router.get( '/producto/:id', requireAuth, obtenerProductoPorId );
router.post( '/actualizar/producto/:id', requireAuth, actualizarProducto );
router.get( '/actualizar/producto/:id', requireAuth, obtenerYActualizarProductoPorId );
router.get( '/eliminar/producto/:id', requireAuth, eliminarProducto );

module.exports = router;