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
        {Icon}{ ' '.concat(reviews).concat(' reviews')}
      </Text>
    </View>
  );

export default TradiesReviewsBanner;
