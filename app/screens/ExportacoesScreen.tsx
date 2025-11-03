import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExportacoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📤 Tela de Exportações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
