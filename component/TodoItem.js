import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import DeleteTodoModal from './deleteTodoModal';
import {useContext} from 'react';
import {TodoContext} from '../context/todoContext';

export default function TodoItem({item}) {
  const {chekedTodo} = useContext(TodoContext);

  return (
    <View style={styles.itemList}>
      <CheckBox
        checked={item.status}
        containerStyle={styles.checkboxContainer}
        // style={item.status && styles.checkedText}
        onPress={() => chekedTodo(item.key)}
      />
      <Text style={[styles.itemText, item.status && styles.checkedText]}>
        {item.text}
      </Text>
      <DeleteTodoModal itemId={item.key} />
    </View>
  );
}
const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    marginTop: 10,
    borderColor: '#06b6d4',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    display: 'flex',
  },
  itemText: {
    padding: 0,
    color: 'black',
    flex: 1,
  },
  checkboxContainer: {
    padding: 0,
    margin: 0,
    marginRight: 10, // Add some space between the checkbox and the text
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
