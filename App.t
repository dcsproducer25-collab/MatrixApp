import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import PainelAdmin from './screens/PainelAdmin';
import Cadastro from './screens/Cadastro';
import Estoque from './screens/Estoque';
import Vendas from './screens/Vendas';
import Relatorios from './screens/Relatorios';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PainelAdmin" component={PainelAdmin} />
<Stack.Screen name="Cadastro" component={Cadastro} />
<Stack.Screen name="Estoque" component>
<onent={Vendas} />
<Stack.Screen name="Relatorios" component={Relatorios} />
<Stack.Navigator initialRouteName="Login">      
</Stack.Navigator>
    </NavigationContainer>
  );
}
