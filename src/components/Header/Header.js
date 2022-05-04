import React from 'react';
import {View, TextInput, Text} from 'react-native';
import style from './Style_Header';

export default function Header() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Patika Store</Text>
      <TextInput style={style.input} placeholder="Ara..." />
    </View>
  );
}
