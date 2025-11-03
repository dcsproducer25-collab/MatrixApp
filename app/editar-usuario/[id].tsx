import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';

export default function EditarUsuarioScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

  const handleSalvar = () => {
    console.log(`Usuário ${id} atualizado:`, nome, cargo);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✏️ Editar Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Cargo"
        value={cargo}
        onChangeText={setCargo}
      />

      <Button title="Salvar Alterações" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 12, borderRadius: 8 },
});
