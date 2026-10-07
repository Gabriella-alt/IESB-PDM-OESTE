import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DespesaLista from './DespesaLista';
import DespesaSumario from './DespesaSumario';

export default function DespesaSaida({ despesas = [], periodo }) {
  return (
    <View style={styles.container}>
      <DespesaSumario despesas={despesas} />
      {periodo ? <Text style={styles.periodo}>Período: {periodo}</Text> : null}
      <DespesaLista despesas={despesas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  periodo: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 12,
    fontWeight: '600',
  },
});
