const vendasService = {
  registrarVenda: async (dados: { produto: string; quantidade: number }) => {
    console.log('🧾 Venda registrada:', dados);
    // Simulação de resposta
    return {
      status: 'ok',
      mensagem: 'Venda registrada com sucesso!',
      dados,
    };
  },

  listarVendas: async () => {
    // Simulação de vendas
    return [
      { id: 1, produto: 'Produto A', quantidade: 2 },
      { id: 2, produto: 'Produto B', quantidade: 5 },
    ];
  },
};

export default vendasService;
