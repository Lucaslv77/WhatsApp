import React from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

const ChildComponent = ({
  phoneNumber,
  message,
  onPhoneNumberChange,
  onMessageChange,
  onSendMessage,
}) => {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/download.png')} />
      <TextInput
         style={styles.input}
      placeholder="Número (Ex: 5588999991234)"
      value={phoneNumber}
      onChangeText={onPhoneNumberChange}
      keyboardType="numeric"
      maxLength={13}
      />
      <TextInput
        style={styles.input}
        placeholder="Mensagem"
        value={message}
        onChangeText={onMessageChange}
      />
      <Button title="Enviar mensagem" onPress={onSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Largura da tela
    height: '100%',
    padding: 115,
     flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
     backgroundColor: '#25D366',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
   logo: {
    width: 200,
    height: 200,
    flex: 1,
    alignItems: 'center',
  }
});

export default ChildComponent;