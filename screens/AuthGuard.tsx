import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function AuthGuard({ children }) {
  const navigation = useNavigation();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        navigation.navigate('Login');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  );
}
