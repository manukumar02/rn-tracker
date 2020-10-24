import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import Spacer from './Spacer';

const TrackForm = () => {

  const { state: { name, recording, locations }, startRecording, stopRecording, changeName, saveRecording } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Spacer>
        <Input
          placeholder='Enter Track Name'
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {recording ? <Button title='Stop' onPress={stopRecording} /> : <Button title='Start Recording' onPress={startRecording} />}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? <Button title='Save recording' onPress={saveTrack} /> : null}
      </Spacer>
    </View>
  )
}

export default TrackForm

const styles = StyleSheet.create({})
