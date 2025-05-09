const fs = require('fs');
const path = require('path');

function carregarUsuarios() {
  const dataPath = path.join(__dirname, '../db.json');
  const jsonData = fs.readFileSync(dataPath);
  const { usuarios } = JSON.parse(jsonData);
  return usuarios;
}

function listarUsuarios() {
  return carregarUsuarios();
}

function buscarUsuarioPorId(id) {
  const usuarios = carregarUsuarios();
  return usuarios.find(u => u.id === id) || null;
}

module.exports = { listarUsuarios, buscarUsuarioPorId };
