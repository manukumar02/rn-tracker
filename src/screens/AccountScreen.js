import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { SafeAreaView, NavigationOptions } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

AccountScreen.NavigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={24} />
}

export default AccountScreen

const styles = StyleSheet.create({})
