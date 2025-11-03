import { View, Text, FlatList, StyleSheet } from 'react-native';

const estoqueSimulado = [
  { id: '1', nome: 'Refrigerante Lata', quantidade: 24 },
  { id: '2', nome: 'Hambúrguer Bovino', quantidade: 12 },
  { id: '3', nome: 'Pão de Hambúrguer', quantidade: 30 },
  { id: '4', nome: 'Guardanapos', quantidade: 100 },
  { id: '5', nome: 'Molho Especial', quantidade: 8 },
];

export default function EstoqueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Controle de Estoque</Text>

      <FlatList
        data={estoqueSimulado}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.quantidade}>Quantidade: {item.quantidade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: '500',
  },
  quantidade: {
    fontSize: 16,
    color: '#007AFF',
  },
});
