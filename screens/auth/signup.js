import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup() {
  const navigation = useNavigation();
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!values.confirm_password) {
      errors.confirm_password = 'Confirm Password is required';
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = 'Passwords must match';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
    validate,
    onSubmit: async values => {
      AsyncStorage.setItem('todo_user', JSON.stringify(values));
      navigation.navigate('Login');
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Sign up to continue!</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          name="email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
        />
        {formik.errors.email && formik.touched.email ? (
          <Text style={{color: 'red'}}>{formik.errors.email}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="enter your password"
          style={styles.input}
          name="password"
          type="password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
        {formik.errors.password && formik.touched.password ? (
          <Text style={{color: 'red'}}>{formik.errors.password}</Text>
        ) : null}

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="re-enter your password"
          style={styles.input}
          name="confirm_password"
          type="password"
          value={formik.values.confirm_password}
          onChangeText={formik.handleChange('confirm_password')}
          onBlur={formik.handleBlur('confirm_password')}
        />
        {formik.errors.confirm_password && formik.touched.confirm_password ? (
          <Text style={{color: 'red'}}>{formik.errors.confirm_password}</Text>
        ) : null}

        <Button color="#06b6d4" title="Sign up" onPress={formik.handleSubmit} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    marginBottom: 5,
    color: 'black',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    fontColor: 'black',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    // marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
});
