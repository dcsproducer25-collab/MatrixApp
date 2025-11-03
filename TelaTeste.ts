import { salvarProduto } from './services/estoque';

const testarGravacao = async () => {
  await salvarProduto({
    nome: 'Caderno Espiral',
    preco: 12.5,
    quantidade: 30
  });
  console.log('Produto salvo com sucesso!');
};
