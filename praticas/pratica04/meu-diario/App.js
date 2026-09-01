import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (!taskText.trim()) {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: taskText.trim(),
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={taskText}
          onChangeText={setTaskText}
          placeholder="Digite uma tarefa"
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskList}>
        {tasks.map((item) => (
          <View style={styles.taskCard} key={item.id}>
            <Text style={styles.taskText}>{item.title}</Text>

            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ea00ff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#ff00dd',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  taskList: {
    gap: 10,
  },

  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
  },

  taskText: {
    fontSize: 17,
    flex: 1,
  },

  deleteButton: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});