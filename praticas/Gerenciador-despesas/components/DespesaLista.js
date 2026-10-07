import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import DespesaItem from './DespesaItem';

export default function DespesaLista({ despesas = [] }) {
  if (!despesas.length) {
    return (
      <View style={styles.vazio}>
        <Text style={styles.vazioTexto}>Nenhuma despesa encontrada.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={despesas}
      keyExtractor={(item, index) => `${item.id ?? 'despesa'}-${index}`}
      renderItem={({ item }) => <DespesaItem item={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingBottom: 20,
  },
  vazio: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vazioTexto: {
    color: '#6b7280',
    fontSize: 14,
  },
});
