import AuthGuard from './AuthGuard';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';

export default function Estoque() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const estoqueRef = ref(db, 'estoque');

    get(estoqueRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lista = Object.keys(data).map(id => ({
          id,
          ...data[id]
        }));
        setProdutos(lista);
      }
    });
  }, []);

 return (
  <AuthGuard>
    <ScrollView style={{ padding: 20 }}>
      {/* conteúdo do estoque */}
    </ScrollView>
  </AuthGuard>
);
     
 <Text style={{ fontSize: 20, marginBottom: 10 }}>Estoque</Text>
      {produtos.map((item, index) => (
        <View key={index} style={{ marginBottom: 15 }}>
          <Text>Produto: {item.nome}</Text>
          <Text>Quantidade: {item.qtd}</Text>
          <Text>Preço: R$ {item.preco}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
