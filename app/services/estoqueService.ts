const estoqueService = {
  listar: async () => {
    return [
      { id: 1, nome: 'Produto A', quantidade: 10 },
      { id: 2, nome: 'Produto B', quantidade: 5 },
    ];
  },
};

export default estoqueService;
