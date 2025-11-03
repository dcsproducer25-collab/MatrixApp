import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const salvarUsuario = async (usuario: {
  nome: string;
  email: string;
  telefone?: string;
}) => {
  await addDoc(collection(db, 'usuarios'), usuario);
};
