const userService = {
  login: async (email, senha) => {
    if (email === 'dcsproducer25@gmail.com' && senha === 'Asd123br') {
      return { status: 'ok', user: { nome: 'DcsProducer' } };
    } else {
      throw new Error('Credenciais inválidas');
    }
  },
};

export default userService;
