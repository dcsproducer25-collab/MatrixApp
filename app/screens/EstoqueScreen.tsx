import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EstoqueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Tela de Estoque</Text>
      <Text style={styles.subtitle}>Aqui você pode visualizar e gerenciar o estoque.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
