import {
  NativeBaseProvider,
  FormControl,
  Input,
  Button,
  Modal,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {React, useRef, useState, useContext} from 'react';
import {TodoContext} from '../context/todoContext';

const AddTodo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const {addTodos} = useContext(TodoContext);
  const [todo, setTodo] = useState('');

  const saveTodo = () => {
    addTodos({text: todo, status: false, key: Math.random().toString()});
    setTodo('');
  };
  return (
    <NativeBaseProvider>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Add todo</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Enter new todo</FormControl.Label>
              <Input
                ref={initialRef}
                value={todo}
                onChangeText={e => setTodo(e)}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  saveTodo();
                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Icon name="plus" size={15} color="white" />
      </TouchableOpacity>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  addButton: {
    alignSelf: 'flex-end',
    width: 60,
    padding: 10,
    backgroundColor: '#06b6d4',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddTodo;
