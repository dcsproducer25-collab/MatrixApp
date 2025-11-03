import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const auth = getAuth();

  const logar = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(user => {
        console.log('Logado como:', user.user.email);
        navigation.navigate('PainelAdmin');
      })
      .catch(err => alert('Erro ao logar: ' + err.message));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <Button title="Entrar" onPress={logar} />
    </View>
  );
}
