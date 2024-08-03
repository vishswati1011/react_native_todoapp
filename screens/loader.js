import React from 'react';
import {NativeBaseProvider, HStack, Spinner} from 'native-base';
import {StyleSheet} from 'react-native';
export default function Loader() {
  return (
    <NativeBaseProvider>
      <HStack
        space={8}
        justifyContent="center"
        alignItems="center"
        style={styles.container}>
        <Spinner size="lg" />
      </HStack>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
