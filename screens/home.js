import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AddTodo from '../component/AddTodoModal';
import TodoItem from '../component/TodoItem';
import {TodoContext} from '../context/todoContext';
import {TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const {todos} = useContext(TodoContext);
  const navigation = useNavigation();
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('todo_user');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Todo list</Text>
        <View style={styles.icon_list}>
          <AddTodo />
          <TouchableOpacity
            onPress={() => handleLogout()}
            style={styles.logoutButton}>
            <Icon name="sign-out" size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={todos}
        renderItem={({item}) => <TodoItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#06b6d4',
  },
  icon_list: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  logoutButton: {
    alignSelf: 'flex-end',
    width: 60,
    padding: 10,
    backgroundColor: '#06b6d4',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
export default Home;
