import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  APP_TITLE,
  INPUT_PLACEHOLDER,
  ADD_BUTTON_TEXT,
  LIST_TITLE,
} from './labels';

export default function App() {
  // Lista estática para esta atividade.
  // O foco neste momento é trabalhar componentes e layout.
  const disciplinas = [
    'Programação para Dispositivos Móveis',
    'Banco de Dados',
    'Engenharia de Software',
    'Desenvolvimento Web',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.title}>{APP_TITLE}</Text>

      {/* 
        flexDirection: 'row' coloca o input e o botão
        lado a lado.
      */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder={INPUT_PLACEHOLDER}
        />

        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed,
          ]}
          onPress={() => {}}
        >
          <Text style={styles.addButtonText}>{ADD_BUTTON_TEXT}</Text>
        </Pressable>
      </View>

      {/* Título da lista */}
      <Text style={styles.listTitle}>{LIST_TITLE}</Text>

      {/* Lista estática usando map */}
      <View style={styles.list}>
        {disciplinas.map((disciplina, index) => (
          <View style={styles.item} key={index}>
            <Text style={styles.itemText}>{disciplina}</Text>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',

    // Centraliza o conteúdo horizontalmente dentro da tela.
    alignItems: 'stretch',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 25,
  },

  inputRow: {
    flexDirection: 'row',

    // Mantém input e botão alinhados verticalmente.
    alignItems: 'center',

    // Espaço entre o campo e o botão.
    justifyContent: 'space-between',

    marginBottom: 30,
  },

  input: {
    // Demonstração do uso de flex.
    // O input ocupa o espaço disponível da linha.
    flex: 1,

    height: 50,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    fontSize: 16,

    marginRight: 10,
  },

  addButton: {
    // Demonstração de largura percentual.
    width: '28%',

    height: 50,
    backgroundColor: '#2563EB',
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonPressed: {
    backgroundColor: '#1D4ED8',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  listTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },

  list: {
    // A coluna é o comportamento padrão do View,
    // mantendo os itens um abaixo do outro.
    flexDirection: 'column',
  },

  item: {
    marginVertical: 6,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,

    // Pequena sombra visual para destacar os itens.
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  itemText: {
    fontSize: 16,
    color: '#374151',
  },
});