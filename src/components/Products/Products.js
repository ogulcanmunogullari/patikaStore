/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './Style_Products';

const Products = ({products}) => {
  return (
    <View style={style.container}>
      <View style={style.img_container}>
        <Image style={style.image} source={{uri: products.imgURL}} />
      </View>
      <Text style={style.title}>{products.title}</Text>
      <Text style={style.price}>{products.price}</Text>
      {products.inStock !== true ? (
        <Text style={style.stock}>STOKTA YOK</Text>
      ) : null}
    </View>
  );
};
export default Products;
