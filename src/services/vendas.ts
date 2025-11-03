import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const salvarVenda = async (venda: {
  produtoId: string;
  quantidade: number;
  valorTotal: number;
  data: string;
}) => {
  await addDoc(collection(db, 'vendas'), venda);
};
