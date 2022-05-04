import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
  },
  img_container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    alignSelf: 'center',
    width: Dimensions.get('screen').width / 1,
    height: Dimensions.get('screen').height / 4,
    resizeMode: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 10},
  price: {fontSize: 16, fontWeight: 'bold', marginTop: 5},
  stock: {fontSize: 18, fontWeight: 'bold', color: 'red', marginTop: 5},
});
