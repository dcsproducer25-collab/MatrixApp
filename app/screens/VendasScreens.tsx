import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const vendas = [
  { id: '1', produto: 'Camiseta Matrix', valor: 'R$ 49,90' },
  { id: '2', produto: 'Boné Matrix', valor: 'R$ 29,90' },
  { id: '3', produto: 'Jaqueta Matrix', valor: 'R$ 199,90' },
];

export default function VendasScreens() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Vendas Recentes</Text>

      <FlatList
        data={vendas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.produto}>{item.produto}</Text>
            <Text style={styles.valor}>{item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  produto: {
    fontSize: 18,
    fontWeight: '500',
  },
  valor: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 4,
  },
});
