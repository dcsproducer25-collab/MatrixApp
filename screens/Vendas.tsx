import AuthGuard from './AuthGuard';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';

export default function Vendas() {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const vendasRef = ref(db, 'vendas');

    get(vendasRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lista = Object.keys(data).map(id => ({
          id,
          ...data[id]
        }));
        setVendas(lista);
      }
    });
  }, []);

return (
  <AuthGuard>
    <ScrollView style={{ padding: 20 }}>
      {/* conteúdo das vendas */}
    </ScrollView>
  </AuthGuard>
);

      <Text style={{ fontSize: 20, marginBottom: 10 }}>Histórico de Vendas</Text>
      {vendas.map((item, index) => (
        <View key={index} style={{ marginBottom: 15 }}>
          <Text>Produto: {item.produto}</Text>
          <Text>Quantidade: {item.qtd}</Text>
          <Text>Data: {item.data}</Text>
          <Text>Total: R$ {item.total}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
