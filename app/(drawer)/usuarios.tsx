import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const usuariosSimulados = [
  { id: '1', nome: 'Ana Paula', cargo: 'Atendente' },
  { id: '2', nome: 'Carlos Silva', cargo: 'Caixa' },
  { id: '3', nome: 'Juliana Mendes', cargo: 'Gerente' },
];

export default function UsuariosScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👥 Lista de Usuários</Text>

      <FlatList
        data={usuariosSimulados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/editar-usuario/${item.id}`)}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.cargo}>Cargo: {item.cargo}</Text>
            <Text style={styles.editar}>✏️ Editar</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 12, marginBottom: 12, borderRadius: 8 },
  nome: { fontSize: 18, fontWeight: '500' },
  cargo: { fontSize: 16, color: '#555' },
  editar: { fontSize: 14, color: '#007AFF', marginTop: 8 },
});
