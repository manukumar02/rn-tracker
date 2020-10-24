import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(Context);

  useEffect(() => {
    tryLocalSignin();
  }, [])

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWill={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
      />
      <NavLink
        routeName='Signin'
        text='Already have an account? Sign in instead!'
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 16,
    marginTop: 16
  }
})
