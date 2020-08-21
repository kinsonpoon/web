import React from 'react';
import {Text, View } from 'react-native';
import MtrInput from './components/mtrInput.js'

export default function App() {

  return (
      <View>

          <Text>Transportation Fee Calculator for Hong Kong</Text>
          <Text>MTR</Text>
          <MtrInput />
          </View>


  );
}


