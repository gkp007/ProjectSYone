/* eslint-disable prettier/prettier */
import React from 'react';

import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './components/login';
// import RegisterScreen from './components/register';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <>
    <LoginScreen/>
</>
  );
}

export default App;