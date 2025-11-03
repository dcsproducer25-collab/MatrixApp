import AuthGuard from './AuthGuard';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function PainelAdmin() {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const db = getDatabase();
  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    const adminRef = ref(db, `admin/${uid}`);
    get(adminRef).then(snapshot => {
      if (snapshot.exists()) {
        setAdminData(snapshot.val());
      } else {
        setAdminData({ erro: 'Acesso negado: não é admin' });
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
  <AuthGuard>
    <View style={{ padding: 20 }}>
      {/* conteúdo do painel */}
    </View>
  </AuthGuard>
);
    
<Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Painel Administrativo</Text>

      {adminData?.erro ? (
        <Text style={{ color: 'red' }}>{adminData.erro}</Text>
      ) : (
        <>
          <Text>Email: {adminData.email}</Text>
          <Text>Nível: {adminData.nivel}</Text>
          <Text>Status: {adminData.ativo ? 'Ativo' : 'Inativo'}</Text>

          {adminData.nivel === 'super' && (
            <>
              <View style={{ marginTop: 20 }}>
                <Button title="Cadastrar Usuário" onPress={() => navigation.navigate('Cadastro')} />
              </View>
              <View style={{ marginTop: 10 }}>
                <Button title="Ver Relatórios" onPress={() => navigation.navigate('Relatorios')} />
              </View>
            </>
          )}
        </>
      )}
    </View>
  );
}
