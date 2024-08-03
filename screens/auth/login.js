import React, {useContext} from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
  NativeBaseProvider,
} from 'native-base';
import {AuthContext} from '../../context/authContext';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useFormik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);

  const validate = values => {
    const errors = {};
    if (values.email === '') {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async values => {
      console.log(values);
      AsyncStorage.getItem('todo_user').then(async user => {
        if (user) {
          const userData = JSON.parse(user);
          if (userData.email === values.email) {
            if (userData.password === values.password) {
              console.log('matched');
              login('loggedIn');
              await navigation.navigate('Home');
            } else {
              alert('Invalid password');
            }
          } else {
            alert('User not found');
          }
        } else {
          alert('User not found');
        }
      });
    },
  });
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" w="100%" maxW="290" py="8">
          <Heading
            size="lg"
            color="#06b6d4"
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight="semibold">
            Welcome!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                type="text"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                name="email"
                value={formik.values.email}
                error={formik.errors.email}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                name="password"
                value={formik.values.password}
                error={formik.errors.password}
              />
            </FormControl>
            <Button onPress={formik.handleSubmit}>Login</Button>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.link}>Don't have an account? Singup</Text>
            </TouchableOpacity>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    marginTop: 10,
    marginLeft: 'auto',
  },
});
