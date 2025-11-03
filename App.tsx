import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import PainelAdmin from './screens/PainelAdmin';
import Cadastro from './screens/Cadastro';
import Relatorios from './screens/Relatorios';
import Perfil from './screens/Perfil';
import Dashboard from './screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PainelAdmin" component={PainelAdmin} />
<Stack.Screen name="Cadastro" component={Cadastro} />
<Stack.Screen name="Relatorios" component={Relatorios} /> 
<Stack.Screen name="Perfil" component={Perfil} />
<Stack.Screen name="Dashboard" component={Dashboard} />

</Stack.Navigator>
    </NavigationContainer>
  );
}
