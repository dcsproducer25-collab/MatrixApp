import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  const cadastrar = async () => {
    const auth = getAuth();
    const db = getDatabase();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      await set(ref(db, `usuarios/${uid}`), {
        nome,
        email,
        criadoEm: new Date().toISOString()
      });

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      setEmail('');
      setSenha('');
      setNome('');
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Cadastro de Usuário</Text>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={{ marginBottom: 10 }} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ marginBottom: 10 }} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={{ marginBottom: 10 }} />
      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}
