import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps'
import Spacer from '../components/Spacer';

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);

  const track = state.find(item => item._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Spacer>
        <Text h3>{track.name}</Text>
      </Spacer>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})
