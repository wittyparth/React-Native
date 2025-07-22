
import "./global.css"
import { StyleSheet, Text} from 'react-native';
import Todos from './src/components/Todos';
import TodoInput from './src/components/TodoInput';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}className="font-bold">
        Todo List
      </Text>
      <TodoInput/>
      <Todos/>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop : 40,
    flex: 1,
    paddingHorizontal : 10
  },
  title : {
    textAlign : "center",
    fontSize : 20,
    color : "black",
    marginVertical : 10
  }
});

export default App;
