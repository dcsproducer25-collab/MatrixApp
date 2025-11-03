import React from 'react';
import { View, Text, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import AuthGuard from './AuthGuard';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigation = useNavigation();

  const sair = () => {
    signOut(auth).then(() => {
      navigation.navigate('Login');
    });
  };

  return (
    <AuthGuard>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20 }}>Perfil do Usuário</Text>
        <Text>Email: {user?.email}</Text>
        <Text>UID: {user?.uid}</Text>
        <Button title="Sair" onPress={sair} />
      </View>
    </AuthGuard>
  );
}
