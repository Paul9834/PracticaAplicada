const express = require('express');
const router = express.Router();


/**
 * importar controladores
 */

 const propietarioController = require("../controllers/propietario.controller");



/* GET users listing. */
router.post('/', propietarioController.crearPropietario);

router.get('/', propietarioController.devolverPropietarios);

module.exports = router;