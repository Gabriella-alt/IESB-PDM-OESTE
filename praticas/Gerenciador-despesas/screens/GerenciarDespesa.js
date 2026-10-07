import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { categorias } from '../data/despesas';

export default function GerenciarDespesa({ navigation, route }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [data, setData] = useState(new Date());
  const [mostrarData, setMostrarData] = useState(false);

  const handleValor = (texto) => {
    if (/^\d*\.?\d{0,2}$/.test(texto) || texto === '') {
      setValor(texto);
    }
  };

  const handleSalvar = () => {
    if (!descricao.trim() || !valor || !categoria) {
      Alert.alert('Dados incompletos', 'Preencha descrição, valor e categoria antes de salvar.');
      return;
    }

    const novaDespesa = {
      id: String(Date.now()),
      descricao: descricao.trim(),
      valor: Number(valor),
      categoria,
      data: data.toISOString(),
    };

    if (route.params?.onSalvar) {
      route.params.onSalvar(novaDespesa);
    }

    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Nova despesa</Text>

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Ex.: Supermercado"
        style={styles.input}
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        value={valor}
        onChangeText={handleValor}
        placeholder="Ex.: 42.50"
        keyboardType="decimal-pad"
        style={styles.input}
      />

      <Text style={styles.label}>Data</Text>
      <Pressable onPress={() => setMostrarData(true)} style={styles.inputData}>
        <Text style={styles.inputText}>{data.toLocaleDateString('pt-BR')}</Text>
      </Pressable>

      {mostrarData && (
        <DateTimePicker
          value={data}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setMostrarData(false);
            if (selectedDate) {
              setData(selectedDate);
            }
          }}
        />
      )}

      <Text style={styles.label}>Categoria</Text>
      <View style={styles.categoriasContainer}>
        {categorias.map((item) => (
          <Pressable
            key={item}
            onPress={() => setCategoria(item)}
            style={[styles.categoria, categoria === item && styles.categoriaAtiva]}
          >
            <Text style={[styles.categoriaTexto, categoria === item && styles.categoriaTextoAtivo]}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.botao} onPress={handleSalvar}>
        <Text style={styles.botaoTexto}>Salvar despesa</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  inputData: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
  },
  inputText: {
    color: '#111827',
    fontSize: 16,
  },
  categoriasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoria: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  categoriaAtiva: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  categoriaTexto: {
    color: '#374151',
    fontWeight: '600',
  },
  categoriaTextoAtivo: {
    color: '#fff',
  },
  botao: {
    backgroundColor: '#111827',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
