const express = require('express');
const usuarioController = require('../controllers/usuariosController');
const router = express.Router();

router.get('/', usuarioController.getAllUsuarios); 
router.get('/new', usuarioController.renderCreateForm);
router.post('/', usuarioController.createUsuarios);
router.get('/:id', usuarioController.getUsuariosById);
router.get('/:id/edit', usuarioController.renderEditForm);
router.put('/:id', usuarioController.updateUsuarios);
router.delete('/:id', usuarioController.deleteUsuarios);

module.exports = router;
