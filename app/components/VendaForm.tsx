import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function VendaForm({ onSubmit }) {
  const [produto, setProduto] = React.useState('');
  const [quantidade, setQuantidade] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Produto"
        value={produto}
        onChangeText={setProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <Button title="Registrar Venda" onPress={() => onSubmit({ produto, quantidade })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginBottom: 12,
  },
});
