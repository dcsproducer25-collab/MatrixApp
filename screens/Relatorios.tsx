import AuthGuard from './AuthGuard';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';

export default function Relatorios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const usuariosRef = ref(db, 'usuarios');

    get(usuariosRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lista = Object.keys(data).map(uid => ({
          uid,
          ...data[uid]
        }));
        setUsuarios(lista);
      }
    });
  }, []);

return (
  <AuthGuard>
    <ScrollView style={{ padding: 20 }}>
      {/* conteúdo do relatório */}
    </ScrollView>
  </AuthGuard>
);  

      <Text style={{ fontSize: 20, marginBottom: 10 }}>Relatório de Usuários</Text>
      {usuarios.map((user, index) => (
        <View key={index} style={{ marginBottom: 15 }}>
          <Text>Nome: {user.nome}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Criado em: {user.criadoEm}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
