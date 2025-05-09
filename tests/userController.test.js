const { listarUsuarios, buscarUsuarioPorId } = require('../controllers/userController');

describe('Controlador de Usuários', () => {
  test('deve retornar uma lista com 3 usuários', () => {
    const lista = listarUsuarios();
    expect(lista).toHaveLength(3);
    expect(lista[0]).toHaveProperty('nome');
    expect(lista[1].email).toBe('bob@example.com');
  });

  test('deve retornar o usuário correto', () => {
    const usuario = buscarUsuarioPorId(2);
    expect(usuario).not.toBeNull();
    expect(usuario.nome).toBe('Bob');
  });

  test('deve retornar null se o usuário não existir', () => {
    const usuario = buscarUsuarioPorId(999);
    expect(usuario).toBeNull();
  });
});