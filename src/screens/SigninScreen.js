import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import { NavigationEvents } from 'react-navigation';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign in to you Account'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText='Sign In'
      />
      <NavLink
        routeName='Signup'
        text='Do not have an account? Sign up instead!'
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  link: {
    fontSize: 24,
    margin: 16,
    color: 'blue'
  }
})
