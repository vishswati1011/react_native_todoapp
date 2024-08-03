import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import DeleteTodoModal from './deleteTodoModal';

export default function TodoItem({item}) {
  return (
    <View style={styles.itemList}>
      <Text style={styles.itemText}>{item.text}</Text>
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
  },
  itemText: {
    marginLeft: 10,
    color: 'black',
  },
});
