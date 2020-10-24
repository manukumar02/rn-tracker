import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://c1b5316f319f.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
    const configData = config;
    const token = await AsyncStorage.getItem('token');
    if (token) {
      configData.headers.Authorization = `Bearer ${token}`;
    }
    return configData;
  }, (err) => Promise.reject(err)
);

export default instance;
