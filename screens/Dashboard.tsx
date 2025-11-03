import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Picker } from '@react-native-picker/picker';
import { getDatabase, ref, get } from 'firebase/database';
import AuthGuard from './AuthGuard';

export default function Dashboard() {
  const [filtro, setFiltro] = useState('todos');
  const [dados, setDados] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const db = getDatabase();

    // Vendas
    const vendasRef = ref(db, 'vendas');
    get(vendasRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lista = Object.keys(data).map(id => ({
          ...data[id],
          id
        }));
        setDados(lista);
      }
    });

    // Estoque
    const estoqueRef = ref(db, 'estoque');
    get(estoqueRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lista = Object.keys(data).map(id => ({
          ...data[id],
          id
        }));
        setProdutos(lista);
      }
    });
  }, []);

  // Filtro de vendas
  const filtrarDados = () => {
    const hoje = new Date();
    return dados.filter(item => {
      const dataVenda = new Date(item.data);
      if (filtro === '7dias') {
        return (hoje - dataVenda) < (7 * 24 * 60 * 60 * 1000);
      }
      if (filtro === 'mes') {
        return dataVenda.getMonth() === hoje.getMonth();
      }
      return true;
    });
  };

  const dadosFiltrados = filtrarDados();
  const dias = dadosFiltrados.map(item => item.data);
  const totais = dadosFiltrados.map(item => parseFloat(item.total));

  // Agrupamento por categoria
  const categorias = {};
  produtos.forEach(p => {
    categorias[p.categoria] = (categorias[p.categoria] || 0) + p.qtd;
  });

  return (
    <AuthGuard>
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Dashboard de Vendas</Text>

        <Picker selectedValue={filtro} onValueChange={setFiltro}>
          <Picker.Item label="Todos" value="todos" />
          <Picker.Item label="Últimos 7 dias" value="7dias" />
          <Picker.Item label="Este mês" value="mes" />
        </Picker>

        <LineChart
          data={{
            labels: dias,
            datasets: [{ data: totais }]
          }}
          width={Dimensions.get('window').width - 40}
          height={220}
          yAxisSuffix="R$"
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#f0f0f0',
            backgroundGradientTo: '#e0e0e0',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: () => '#333'
          }}
          style={{ borderRadius: 10 }}
        />

        <Text style={{ fontSize: 20, marginTop: 30 }}>Estoque por Categoria</Text>

        <BarChart
          data={{
            labels: Object.keys(categorias),
            datasets: [{ data: Object.values(categorias) }]
          }}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
            labelColor: () => '#333',
            style: { borderRadius: 10 }
          }}
          style={{ borderRadius: 10 }}
        />
      </ScrollView>
    </AuthGuard>
  );
}
