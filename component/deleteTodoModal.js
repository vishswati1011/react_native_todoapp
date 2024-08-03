import {NativeBaseProvider, Button, Modal} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {React, useRef, useState, useContext} from 'react';
import {TodoContext} from '../context/todoContext';

const DeleteTodoModal = ({itemId}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const {deleteTodo} = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(itemId);
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
          <Modal.Header>Are you sure?</Modal.Header>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="red"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}>
                No
              </Button>
              <Button onPress={() => handleDelete()}>Yes</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Icon name="trash" size={15} color="red" />
      </TouchableOpacity>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  addButton: {
    alignSelf: 'flex-end',
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DeleteTodoModal;
