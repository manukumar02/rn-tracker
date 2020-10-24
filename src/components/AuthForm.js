import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>

      <Input
        autoCapitalize='none'
        autoCorrect={false}
        label='Email'
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        label='Password'
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>

    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 16,
    marginTop: 16
  }
});
