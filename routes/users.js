var express = require('express');
var router = express.Router();
const { listarUsuarios, buscarUsuarioPorId } = require('../controllers/userController');

router.get('/', function(req, res, next) {
  res.json(listarUsuarios());
});

router.get('/:id', function(req, res, next) {
  const usuario = buscarUsuarioPorId(parseInt(req.params.id));
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
});

module.exports = router;