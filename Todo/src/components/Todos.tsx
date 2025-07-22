import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Todo from './Todo';


interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: Date.now(),
      task: 'Go to office',
      completed: true,
    },
  ]);

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filled: {
    backgroundColor: 'blue',
    width: 10,
    height: 10,
    flexDirection: 'row',
  },
  box: {
    width: 10,
    height: 10,
    flexDirection: 'row',
  },
  container: {
    marginTop: 30,
    flex:1
  },
  todo : {
    flexDirection : "row",
    alignItems : "center"
  }
});
export default Todos;
