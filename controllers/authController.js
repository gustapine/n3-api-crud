const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models');
const Tutor = db.Tutor;

const login = async (req, res) => {
  console.log('Chamando a função de login');

  const email = req.body.email;
  const senha = req.body.senha;

  console.log('Email fornecido:', email);

  try {
    // Verificar se o email corresponde a um tutor válido
    const tutor = await Tutor.findOne({ where: { email } });

    console.log('Tutor encontrado:', tutor);

    if (!tutor) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Verificar a senha
    console.log(senha);
    console.log('Hash de senha armazenado:', tutor.senha);
    if (senha === tutor.senha) {
      // Gerar um token JWT com expiração em 3 minutos
      const token = jwt.sign({ id: tutor.id }, 's0/P4$$w0rD', { expiresIn: '3m' });
      console.log('Gerando token JWT');

      // Retornar o token para o cliente
      console.log('Retornando o token para o cliente');
      return res.json({ token });
    } else {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro no servidor' });
  }
};


module.exports = { login };
