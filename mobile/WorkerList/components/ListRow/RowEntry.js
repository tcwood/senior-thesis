import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import TradieBanner from '../MiniBanner/TradieBanner';

const TradieRow = ({ name }) =>
  (
    <View className="tradieRow">
      <Image source={{ uri: '../../assets/TradesManPicture.png' }} />
      <Text>{name}</Text>
      <TradieBanner />
    </View>
  );
export default TradieRow;
