import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const TradiesReviewsBanner = ({ reviews, Icon }) =>
  (
    <View className="TradiesReviewsBanner">
      <Text>
        {Icon}{ ' ' + reviews + ' reviews'}
      </Text>
    </View>
  );

export default TradiesReviewsBanner;
