import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext)
  useEffect(() => {
    tryLocalSignin()
  }, [])
  return null
}

export default ResolveAuthScreen

const styles = StyleSheet.create({})
