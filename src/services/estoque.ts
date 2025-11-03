import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const salvarProduto = async (produto: {
  nome: string;
  preco: number;
  quantidade: number;
}) => {
  await addDoc(collection(db, 'estoque'), produto);
};
