import CheckBox from '@react-native-community/checkbox'
import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import type { TodoType } from '../../types'
interface TodoProps {
    todo : TodoType,
    setTodo : ()=>void
}

const Todo = ({todo,setTodos}:any) => {
      const handleClick = (id: number) => {
        setTodos(todos=> todos.map((todo=>todo.id===id ? {...todo,completed:!todo.completed}:todo)))
  };
  const handleDelete = (id:number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  return (
    <View className='flex-row justify-between'>
            <View  style={styles.todo}>
                <CheckBox
                value={todo.completed}
                onChange={()=>handleClick(todo.id)}
                />
              <Text>{todo.task}</Text>
            </View>
            <View className='flex-row gap-2'>
                <TouchableOpacity className='px-3 py-2 bg-blue-700 text-white'>
                    <Text className='text-white'>Edit</Text></TouchableOpacity>
                <TouchableOpacity className='px-3 py-2 bg-red-700 text-white' onPress={()=>handleDelete(todo.id)}>
                    <Text className='text-white'>Delete</Text></TouchableOpacity>
            </View>
            </View>
  )
}

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

export default Todo