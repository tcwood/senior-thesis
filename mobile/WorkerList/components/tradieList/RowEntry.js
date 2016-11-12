import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import TradieBanner from '../tradieBanner/TradieBanner';

const TradieRow = ({ name, expertise, location, reviews }) => 
  (
    <View className="tradieRow">
      <Image source={{ uri: '../../assets/TradesManPicture.png' }} />
      <Text>{name}</Text>
      <TradieBanner expertise={ expertise } location={ location } reviews={ reviews }  />
    </View>
  );
export default TradieRow;
