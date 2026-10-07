import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { categorias } from '../data/despesas';
import DespesaSaida from '../components/DespesaSaida';

export default function DespesasRecentes({ despesas = [] }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  const despesasRecentes = useMemo(() => {
    return [...despesas]
      .sort((a, b) => new Date(b.data) - new Date(a.data))
      .slice(0, 3);
  }, [despesas]);

  const despesasFiltradas = useMemo(() => {
    if (categoriaSelecionada === 'Todas') {
      return despesasRecentes;
    }

    return despesasRecentes.filter((item) => item.categoria === categoriaSelecionada);
  }, [categoriaSelecionada, despesasRecentes]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Despesas recentes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtros}>
        <Pressable
          onPress={() => setCategoriaSelecionada('Todas')}
          style={[styles.chip, categoriaSelecionada === 'Todas' && styles.chipAtivo]}
        >
          <Text style={[styles.chipTexto, categoriaSelecionada === 'Todas' && styles.chipTextoAtivo]}>
            Todas
          </Text>
        </Pressable>

        {categorias.map((categoria) => (
          <Pressable
            key={categoria}
            onPress={() => setCategoriaSelecionada(categoria)}
            style={[styles.chip, categoriaSelecionada === categoria && styles.chipAtivo]}
          >
            <Text style={[styles.chipTexto, categoriaSelecionada === categoria && styles.chipTextoAtivo]}>
              {categoria}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <DespesaSaida despesas={despesasFiltradas} periodo="recentes" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
  },
  filtros: {
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  chip: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginRight: 8,
  },
  chipAtivo: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  chipTexto: {
    color: '#374151',
    fontWeight: '600',
  },
  chipTextoAtivo: {
    color: '#fff',
  },
});
