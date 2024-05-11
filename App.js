import React, { useState } from 'react';
import { View, Alert, Linking, Image } from 'react-native';
import ChildComponent from './components/ChildComponent';



const ParentComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (phoneNumber.startsWith('55') && phoneNumber.length >= 11) {
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      Linking.openURL(whatsappURL);
    } else {
      Alert.alert('Erro', 'Número de telefone inválido');
    }
  };

  return (
    <View>
      <ChildComponent
        phoneNumber={phoneNumber}
        message={message}
        onPhoneNumberChange={setPhoneNumber}
        onMessageChange={setMessage}
        onSendMessage={handleSendMessage}
      />
    </View>
  );
};

export default ParentComponent;
