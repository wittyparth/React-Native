import React, { useState } from 'react'
import { TextInput, TouchableOpacity,Text, StyleSheet } from 'react-native'
import { View } from 'react-native'

interface TodoInputProps {
    todo : string,
    setTodo : ()=>void;
    addTodo : ()=>void;
}
const TodoInput = () => {
    const [todo,setTodo] = useState<string>("") 
  return (
    <View style={styles.inputContainer}>
        <TextInput
        placeholder='Add Todos...'
        value={todo}
        style={styles.input}
        onChangeText={setTodo}
        />
        <TouchableOpacity style={styles.addBtn}>
            <Text className='text-white'>
                Add 
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input : {
        paddingHorizontal : 15,
        paddingVertical : 10,
        borderWidth : 1,
        borderColor : "grey",
        marginHorizontal : 8,
        flex:1
    },
    inputContainer : {
        flexDirection : "row",
    },
    addBtn : {
        paddingHorizontal : 10,
        paddingVertical : 5,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "black",
        marginRight : 5
        
    }
})

export default TodoInput