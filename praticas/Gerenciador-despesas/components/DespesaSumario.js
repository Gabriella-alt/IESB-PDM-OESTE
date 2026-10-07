import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DespesaSumario({ despesas = [] }) {
  const total = despesas.reduce((acumulador, item) => acumulador + Number(item.valor || 0), 0);
  const ultrapassouLimite = total > 200;

  return (
    <View style={styles.resumo}>
      <Text style={styles.label}>Total do período</Text>
      <Text style={[styles.valor, ultrapassouLimite && styles.alerta]}>
        R$ {total.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resumo: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  valor: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
  },
  alerta: {
    color: '#dc2626',
  },
});
