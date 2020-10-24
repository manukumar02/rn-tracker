import React, { useContext } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as TrackContext } from '../context/TrackContext'


const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

export default TrackListScreen

const styles = StyleSheet.create({})
