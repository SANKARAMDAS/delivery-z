import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[outputText, setoutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title= "Registration" onPress= {() => setoutputText('This is it')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
