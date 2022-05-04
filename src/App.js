import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Products from './components/Products';
import Header from './components/Header';
import data_1 from './data.json';

export default function App() {
  const renderItem = ({item}) => <Products products={item} />;
  const renderKey = item => item.id.toString();
  return (
    <View style={style.view}>
      <Header style={style.header} />
      <FlatList
        style={style.container}
        numColumns={2}
        keyExtractor={renderKey}
        data={data_1}
        renderItem={renderItem}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  view: {flex: 1},
  header: {flex: 1},
});
